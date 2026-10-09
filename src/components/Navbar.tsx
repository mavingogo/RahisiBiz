"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, LayoutDashboard, Menu, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(6, 56, 43, 0.94)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "16px 0",
      transition: "all 0.3s ease",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
            color: "#06382b",
          }}>
            <MessageSquare size={24} strokeWidth={2.4} />
          </div>
          <div>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <span style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                fontFamily: "var(--font-heading)",
              }}>
                Rahisi<span style={{ color: "#25D366" }}>Biz</span>
              </span>
              <span style={{
                fontSize: "10px",
                fontWeight: 700,
                backgroundColor: "rgba(37, 211, 102, 0.2)",
                color: "#25D366",
                padding: "2px 8px",
                borderRadius: "9999px",
                border: "1px solid rgba(37, 211, 102, 0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
                AI Copilot
              </span>
            </div>
            <span style={{
              fontSize: "11px",
              color: "#94A3B8",
              fontWeight: 500,
              display: "block",
              marginTop: "-2px",
            }}>
            
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav style={{
          display: "none",
          alignItems: "center",
          gap: "28px",
        }} className="desktop-nav">
          <Link href="#about" style={{ fontSize: "14px", fontWeight: 500, color: "#E2E8F0", transition: "color 0.2s" }} className="nav-link">
            About
          </Link>
          <Link href="#features" style={{ fontSize: "14px", fontWeight: 500, color: "#E2E8F0", transition: "color 0.2s" }} className="nav-link">
            Features
          </Link>
          <Link href="#how-it-works" style={{ fontSize: "14px", fontWeight: 500, color: "#E2E8F0", transition: "color 0.2s" }} className="nav-link">
            How it works
          </Link>
          <Link href="#live-demos" style={{ fontSize: "14px", fontWeight: 500, color: "#E2E8F0", transition: "color 0.2s" }} className="nav-link">
            Live Demo
          </Link>
          <Link href="#pricing" style={{ fontSize: "14px", fontWeight: 500, color: "#E2E8F0", transition: "color 0.2s" }} className="nav-link">
            Pricing
          </Link>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Direct link to Dashboard */}
          <Link href="/dashboard" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "9px 18px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#FFFFFF",
            fontSize: "13px",
            fontWeight: 600,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transition: "all 0.2s ease",
          }} className="dashboard-pill-btn">
            <LayoutDashboard size={15} style={{ color: "#25D366" }} />
            <span>Dashboard</span>
          </Link>

          <Link href="#pricing" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "9px 20px",
            borderRadius: "9999px",
            backgroundColor: "#25D366",
            color: "#06382b",
            fontSize: "14px",
            fontWeight: 700,
            transition: "all 0.2s ease",
            boxShadow: "0 4px 14px rgba(37, 211, 102, 0.35)",
          }}>
            <span>Get Started</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              color: "#FFFFFF",
              padding: "6px",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: "#06382b",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>
            About
          </Link>
          <Link href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>
            Features
          </Link>
          <Link href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>
            How it works
          </Link>
          <Link href="#live-demos" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>
            Live Demo
          </Link>
          <Link href="#pricing" onClick={() => setMobileMenuOpen(false)} style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>
            Pricing
          </Link>
          <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              color: "#FFFFFF",
              borderRadius: "12px",
              fontWeight: 600,
            }}>
              <LayoutDashboard size={18} style={{ color: "#25D366" }} />
              Open User Dashboard
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .dashboard-pill-btn {
            display: none !important;
          }
        }
        .nav-link:hover {
          color: #25D366 !important;
        }
      `}</style>
    </header>
  );
}
