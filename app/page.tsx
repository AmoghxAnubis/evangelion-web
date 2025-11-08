"use client";

import React, { useState } from "react";

const SocialsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socials = [
    { name: "X", url: "https://x.com/evglionservices", icon: "𝕏", color: "#000000" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/evangelion-services-2a8329387?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: "in", color: "#0077B5" },
    { name: "Instagram", url: "https://www.instagram.com/evangelion.services/", icon: "📷", color: "#E4405F" },
    
  ];

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div style={{ position: "relative" }}>
      {/* Popup Container */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={togglePopup}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1999,
            }}
          />

          {/* Popup Card */}
          <div
            style={{
              position: "absolute",
              bottom: "70px",
              right: "0",
              backgroundColor: "rgba(20, 20, 40, 0.95)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "16px",
              minWidth: "220px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(95, 46, 234, 0.3)",
              zIndex: 2001,
              animation: "slideUp 0.3s ease-out",
            }}
          >
            <div
              style={{
                marginBottom: "12px",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              Connect with us
            </div>

            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px",
                  marginBottom: index < socials.length - 1 ? "8px" : "0",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  color: "#fff",
                  transition: "all 0.2s ease",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(95, 46, 234, 0.2)";
                  e.currentTarget.style.borderColor = "rgba(95, 46, 234, 0.5)";
                  e.currentTarget.style.transform = "translateX(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                  e.currentTarget.style.borderColor = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <span style={{ fontSize: "20px", marginRight: "12px" }}>{social.icon}</span>
                <span style={{ fontSize: "14px", fontWeight: "500" }}>{social.name}</span>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Main Button */}
      <button
        onClick={togglePopup}
        style={{
          position: "fixed",
          bottom: "20px", // aligned to sit perfectly over the white button
          right: "20px",
          zIndex: 3000, // ensures it overlays the white button completely
          width: "160px", // same dimensions as white button
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          background: isOpen
            ? "linear-gradient(135deg, #7C3AED, #5F2EEA)"
            : "linear-gradient(135deg, #5F2EEA, #7C3AED)", // gradient for better look
          color: "white",
          border: "none",
          borderRadius: "12px", // matches roundness of the white button
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "15px",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.25)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          if (!isOpen) e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <span>Follow Us</span>
        <span
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          ▼
        </span>
      </button>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default function HomePage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <iframe
        src="https://divine-standards-225104.framer.app/"
        style={{
          border: "none",
          width: "100%",
          height: "100%",
        }}
        allow="fullscreen"
      />
      <SocialsButton />
    </div>
  );
}
