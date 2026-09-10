"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastProvider } from "./toast";

const DARK_SCREENS = new Set(["/home", "/scan"]);
const NAVY_CHROME = new Set(["/home", "/scan", "/profile", "/emergency"]);

function StatusBar({ dark }: { dark: boolean }) {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div dir="ltr" className={`status-bar ${dark ? "is-dark" : ""}`}>
      <span>{time}</span>
      <span className="status-dots" aria-hidden="true">
        <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
          <rect x="0" y="6" width="2.2" height="4" rx="0.4" />
          <rect x="3.4" y="4" width="2.2" height="6" rx="0.4" />
          <rect x="6.8" y="2" width="2.2" height="8" rx="0.4" />
          <rect x="10.2" y="0" width="2.2" height="10" rx="0.4" opacity="0.35" />
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
          <rect
            x="0.6"
            y="2.2"
            width="11.4"
            height="6.6"
            rx="1.4"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <rect x="12.6" y="4.1" width="1.4" height="2.8" rx="0.4" fill="currentColor" />
          <rect x="2" y="3.6" width="7.2" height="3.8" rx="0.6" fill="currentColor" />
        </svg>
      </span>
    </div>
  );
}

export function PhoneShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const dark = DARK_SCREENS.has(pathname);
  const navyChrome = NAVY_CHROME.has(pathname);

  return (
    <div className="app-root">
      <div className={`phone-shell ${dark ? "bg-navy" : ""}`}>
        <StatusBar dark={navyChrome} />
        <ToastProvider>
          <div className="phone-screen">{children}</div>
        </ToastProvider>
        <div className={`home-indicator ${dark ? "is-dark" : ""}`}>
          <span />
        </div>
      </div>
    </div>
  );
}
