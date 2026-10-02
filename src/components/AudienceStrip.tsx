"use client";

import React from "react";
import { Calendar, ShoppingBag, Building2, Target, CheckCircle2 } from "lucide-react";

export default function AudienceStrip() {
  const audiences = [
    {
      icon: <Calendar size={22} style={{ color: "#EF4444" }} />,
      bg: "#FEE2E2",
      title: "Lead & Booking Services",
      desc: "Salons, clinics, consultants, coaches & home services looking to automate bookings.",
    },
    {
      icon: <ShoppingBag size={22} style={{ color: "#F59E0B" }} />,
      bg: "#FEF3C7",
      title: "E-Commerce & Retail",
      desc: "Order tracking, catalog browsing, product FAQs, and cart recovery right on WhatsApp.",
    },
    {
      icon: <Building2 size={22} style={{ color: "#3B82F6" }} />,
      bg: "#DBEAFE",
      title: "Real Estate & Agencies",
      desc: "Instant property tour scheduling, buyer pre-qualification, and brochure sharing.",
    },
    {
      icon: <Target size={22} style={{ color: "#10B981" }} />,
      bg: "#D1FAE5",
      title: "Retargeting & Engagement",
      desc: "Automated follow-ups, re-activation broadcasts, and personalized promotions.",
    },
  ];

  return (
    <section style={{
      padding: "70px 0 60px 0",
      backgroundColor: "#F8FAFC",
      borderBottom: "1px solid #E2E8F0",
    }}>
      <div className="container" style={{ textAlign: "center" }}>
        {/* Pre-title */}
        <span style={{
          fontSize: "12px",
          fontWeight: 800,
          color: "#EF4444",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          display: "block",
          marginBottom: "10px",
        }}>
          WHO IS THIS FOR
        </span>

        {/* Main headline */}
        <h2 style={{
          fontSize: "36px",
          fontWeight: 800,
          color: "#0F172A",
          letterSpacing: "-0.02em",
          marginBottom: "14px",
        }}>
          Built for businesses that run on <span style={{ color: "#0b5944" }}>WhatsApp</span>
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#64748B",
          maxWidth: "640px",
          margin: "0 auto 44px auto",
        }}>
          WhatsApp isn't just a chat app in your market—it's your sales counter, showroom, and support desk combined.
        </p>

        {/* 4 Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          marginBottom: "36px",
          textAlign: "left",
        }}>
          {audiences.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "18px",
                padding: "24px 20px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                transition: "all 0.25s ease",
              }}
              className="audience-card"
            >
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                backgroundColor: item.bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#0F172A",
                marginBottom: "8px",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "13.5px",
                color: "#64748B",
                lineHeight: 1.5,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Callout Quote from Screenshot */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "#FFFFFF",
          padding: "10px 22px",
          borderRadius: "9999px",
          border: "1px solid #CBD5E1",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        }}>
          <span style={{ fontSize: "14px", color: "#334155", fontWeight: 500 }}>
            If your business closes deals on WhatsApp, <strong style={{ color: "#06382b" }}>RahisiBiz is built for you! 🤝</strong>
          </span>
        </div>
      </div>

      <style jsx>{`
        .audience-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.07) !important;
          border-color: #25D366 !important;
        }
      `}</style>
    </section>
  );
}
