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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind CSS CDN and custom theme config */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      'brand-deep': '#06382b',
                      'brand-forest': '#084837',
                      'brand-emerald': '#0b5944',
                      'whatsapp-green': '#25D366',
                      'whatsapp-teal': '#128C7E',
                      'whatsapp-dark': '#075E54',
                      'navy-dark': '#0B132B',
                      'navy-slate': '#1C2541'
                    },
                    fontFamily: {
                      heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                      sans: ['"Inter"', 'sans-serif']
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
