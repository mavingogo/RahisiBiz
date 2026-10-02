"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Calendar, 
  Bot, 
  PhoneCall, 
  Zap, 
  Check, 
  Clock, 
  ShieldCheck,
  Send,
  UserCheck
} from "lucide-react";

export default function Hero() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "customer",
      text: "Hi! Do you have the Kilimani 2-bedroom apartment available for viewing this weekend?",
      time: "09:41 AM",
    },
    {
      id: 2,
      sender: "ai",
      text: "Hello Kevin! 👋 Yes, Unit 4B at Silver Oaks Kilimani is available. It features an open-plan kitchen, balcony view, and high-speed internet. Rent is KES 85,000/mo.",
      time: "09:41 AM",
    },
    {
      id: 3,
      sender: "ai",
      text: "We have viewing slots open this Saturday at 11:00 AM or 3:30 PM. Which time suits you best?",
      time: "09:41 AM",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleQuickReply = (text: string) => {
    const userMsg = {
      id: Date.now(),
      sender: "customer",
      text: text,
      time: "Just now",
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        text: `Confirmed! 📅 I've reserved your slot for Saturday at 11:00 AM. Our viewing agent Daniel (+254 712 999 888) will meet you at the main gate. Directions have been sent!`,
        time: "Just now",
      };
      setMessages((prev) => [...prev, aiReply]);
    }, 900);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal;
    setInputVal("");
    handleQuickReply(text);
  };

  return (
    <section style={{
      backgroundColor: "#06382b",
      background: "radial-gradient(circle at 80% 20%, #0d5440 0%, #06382b 60%, #03241b 100%)",
      color: "#FFFFFF",
      padding: "60px 0 90px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative background grid and organic curves */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "radial-gradient(rgba(37, 211, 102, 0.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "50px",
          alignItems: "center",
        }} className="hero-grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div>
            {/* Top pill badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "rgba(37, 211, 102, 0.15)",
              border: "1px solid rgba(37, 211, 102, 0.35)",
              color: "#6EE7B7",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "24px",
            }}>
              <Sparkles size={15} style={{ color: "#25D366" }} />
              <span>Next-Gen WhatsApp Business AI Copilot</span>
            </div>

            {/* Main Headline from the screenshot */}
            <h1 style={{
              fontSize: "52px",
              lineHeight: 1.12,
              fontWeight: 800,
              color: "#FFFFFF",
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }} className="hero-title">
              Stop Losing <br />
              Customers On <br />
              <span style={{
                color: "#25D366",
                textShadow: "0 0 40px rgba(37, 211, 102, 0.4)",
              }}>
                WhatsApp
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: "19px",
              lineHeight: 1.5,
              color: "#CBD5E1",
              maxWidth: "520px",
              marginBottom: "32px",
              fontWeight: 400,
            }}>
              Turn WhatsApp into your hardest working sales rep & support agent with AI. Qualify leads, book appointments, and close deals automatically 24/7.
            </p>

            {/* Action buttons */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "44px",
            }}>
              <Link href="/dashboard" className="btn-primary" style={{
                padding: "15px 32px",
                fontSize: "16px",
              }}>
                <span>Start Free 14-Day Trial</span>
                <ArrowRight size={18} />
              </Link>

              <Link href="#live-demos" className="btn-secondary" style={{
                padding: "15px 26px",
                fontSize: "15px",
              }}>
                <span>Try Live Demo</span>
              </Link>
            </div>

            {/* 3 Quick Stat Badges from design */}
            <div style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(6px)",
              }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(37, 211, 102, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#25D366",
                }}>
                  <Zap size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>0.8s Auto Reply</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Never lose a lead to delay</div>
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(6px)",
              }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#60A5FA",
                }}>
                  <Calendar size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>Instant Booking</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Calendar auto-sync</div>
                </div>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 16px",
                borderRadius: "14px",
                backgroundColor: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                backdropFilter: "blur(6px)",
              }}>
                <div style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(234, 179, 8, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FBBF24",
                }}>
                  <UserCheck size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>Multi-Agent CRM</div>
                  <div style={{ fontSize: "11px", color: "#94A3B8" }}>Smooth human handoff</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Smartphone Mockup with Real WhatsApp Chat */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: "100%",
              maxWidth: "380px",
              borderRadius: "44px",
              padding: "12px",
              backgroundColor: "#1E293B",
              boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.6), 0 0 40px rgba(37, 211, 102, 0.2)",
              border: "4px solid #334155",
              position: "relative",
            }} className="phone-wrapper animate-float">
              
              {/* Dynamic Island / Speaker notch */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "90px",
                height: "18px",
                backgroundColor: "#000000",
                borderRadius: "20px",
                zIndex: 30,
              }} />

              {/* Inside Phone Screen */}
              <div style={{
                backgroundColor: "#ECE5DD",
                borderRadius: "34px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "560px",
                position: "relative",
              }}>
                {/* WhatsApp Chat Header */}
                <div style={{
                  backgroundColor: "#075E54",
                  padding: "24px 16px 12px 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#06382b",
                      fontWeight: 800,
                      fontSize: "14px",
                      border: "2px solid #FFFFFF",
                    }}>
                      RB
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#FFFFFF" }}>
                          RahisiBiz Agent
                        </span>
                        <div style={{
                          backgroundColor: "#25D366",
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}>
                          <Check size={9} strokeWidth={3} color="#06382b" />
                        </div>
                      </div>
                      <span style={{ fontSize: "11px", color: "#A7F3D0" }}>
                        Official Business Account • Online
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "12px", color: "#FFFFFF" }}>
                    <PhoneCall size={16} />
                  </div>
                </div>

                {/* WhatsApp Message Area */}
                <div style={{
                  flex: 1,
                  padding: "16px 12px",
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.03\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M0 40L40 0H20L0 20M40 40V20L20 40\"/%3E%3C/g%3E%3C/svg%3E')",
                }}>
                  {/* Encrypted Notice */}
                  <div style={{
                    alignSelf: "center",
                    backgroundColor: "#FFEECD",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "10px",
                    color: "#54656F",
                    textAlign: "center",
                    maxWidth: "85%",
                    boxShadow: "0 1px 1px rgba(0,0,0,0.06)",
                  }}>
                    🔒 Messages are end-to-end encrypted with AI instant indexing
                  </div>

                  {messages.map((m) => (
                    <div
                      key={m.id}
                      style={{
                        alignSelf: m.sender === "customer" ? "flex-end" : "flex-start",
                        backgroundColor: m.sender === "customer" ? "#E7FFDB" : "#FFFFFF",
                        padding: "8px 12px",
                        borderRadius: m.sender === "customer" ? "12px 0 12px 12px" : "0 12px 12px 12px",
                        maxWidth: "85%",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.12)",
                        position: "relative",
                      }}
                    >
                      <p style={{ fontSize: "12.5px", color: "#111827", lineHeight: 1.4 }}>
                        {m.text}
                      </p>
                      <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "3px",
                        marginTop: "4px",
                      }}>
                        <span style={{ fontSize: "9.5px", color: "#667781" }}>{m.time}</span>
                        {m.sender === "customer" && (
                          <span style={{ color: "#53BDEB", fontSize: "10px", fontWeight: 700 }}>✓✓</span>
                        )}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div style={{
                      alignSelf: "flex-start",
                      backgroundColor: "#FFFFFF",
                      padding: "8px 14px",
                      borderRadius: "0 12px 12px 12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}>
                      <span style={{ fontSize: "11px", color: "#667781" }}>AI Agent is typing...</span>
                      <div style={{ display: "flex", gap: "2px" }}>
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#128C7E" }} />
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#128C7E" }} />
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#128C7E" }} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick Interactive Pills */}
                <div style={{
                  padding: "8px 10px",
                  backgroundColor: "rgba(240, 242, 245, 0.95)",
                  borderTop: "1px solid #E2E8F0",
                  display: "flex",
                  gap: "6px",
                  overflowX: "auto",
                }}>
                  <button
                    onClick={() => handleQuickReply("Book Saturday 11:00 AM")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "14px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #25D366",
                      color: "#075E54",
                      fontSize: "11px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Saturday 11:00 AM 📅
                  </button>
                  <button
                    onClick={() => handleQuickReply("Send price list PDF")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "14px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      color: "#334155",
                      fontSize: "11px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Send Catalog 📄
                  </button>
                  <button
                    onClick={() => handleQuickReply("Speak to human agent")}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "14px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #CBD5E1",
                      color: "#334155",
                      fontSize: "11px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Human Rep 👤
                  </button>
                </div>

                {/* Chat Input Bar */}
                <form
                  onSubmit={handleSend}
                  style={{
                    backgroundColor: "#F0F2F5",
                    padding: "8px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Type a message to test AI..."
                    style={{
                      flex: 1,
                      padding: "8px 14px",
                      borderRadius: "20px",
                      border: "none",
                      backgroundColor: "#FFFFFF",
                      fontSize: "12px",
                      outline: "none",
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#128C7E",
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Send size={14} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-title {
            font-size: 38px !important;
          }
          .phone-wrapper {
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
