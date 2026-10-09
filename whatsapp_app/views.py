from django.shortcuts import render

# Create your views here.
import json
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os

# Get your verify token from the .env file
VERIFY_TOKEN = os.environ.get("WHATSAPP_VERIFY_TOKEN", "my_super_secret_verify_token_123")

@csrf_exempt
def whatsapp_webhook(request):
    # 1. WEBHOOK VERIFICATION (GET request from Meta)
    if request.method == "GET":
        mode = request.GET.get("hub.mode")
        token = request.GET.get("hub.challenge")
        challenge = request.GET.get("hub.challenge")

        if mode and token:
            if mode == "subscribe" and token == VERIFY_TOKEN:
                print("WEBHOOK_VERIFIED")
                return HttpResponse(challenge, status=200)
            else:
                return HttpResponse("Verification failed", status=403)
        return HttpResponse("Hello, this is the RahisiBiz WhatsApp Webhook Endpoint", status=200)

    # 2. RECEIVING INCOMING MESSAGES (POST request from Meta)
    elif request.method == "POST":
        try:
            body = json.loads(request.body.decode('utf-8'))
            print("Incoming WhatsApp Payload:", json.dumps(body, indent=2))

            # Check if it's a WhatsApp message payload
            if body.get("object") == "whatsapp_business_account":
                for entry in body.get("entry", []):
                    for change in entry.get("changes", []):
                        value = change.get("value", {})
                        messages = value.get("messages", [])
                        
                        if messages:
                            message = messages[0]
                            sender_phone = message.get("from") # Customer's phone number
                            message_body = message.get("text", {}).get("body", "")
                            
                            print(f"Message received from {sender_phone}: {message_body}")
                            
                            # TODO: Here is where we will hook up your AI logic or RAG search later!

            return JsonResponse({"status": "EVENT_RECEIVED"}, status=200)
        except Exception as e:
            print("Error processing webhook:", str(e))
            return JsonResponse({"status": "error", "message": str(e)}, status=400)