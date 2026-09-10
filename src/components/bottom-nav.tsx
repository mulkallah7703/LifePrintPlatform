"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, PersonIcon, WalletIcon } from "./icons";

type BottomNavProps = {
  variant?: "dark" | "light";
};

export function BottomNav({ variant = "dark" }: BottomNavProps) {
  const pathname = usePathname();
  const color = variant === "dark" ? "#ffffff" : "#161b26";

  const items = [
    { href: "/home", icon: HomeIcon, label: "الرئيسية" },
    { href: "/wallet", icon: WalletIcon, label: "المحفظة" },
    { href: "/profile", icon: PersonIcon, label: "الملف" },
  ];

  return (
    <nav className="bottom-nav" aria-label="التنقل السفلي">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
            style={{ color, opacity: active ? 1 : 0.55 }}
          >
            <Icon size={22} />
          </Link>
        );
      })}
    </nav>
  );
}
