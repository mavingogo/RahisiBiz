import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RahisiBiz - Stop Losing Customers On WhatsApp | AI Sales & Support Copilot",
  description: "Turn WhatsApp into your hardest working sales rep & support agent with AI. Built for businesses that run on WhatsApp. Qualify leads, book appointments, and support teams 24/7.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
