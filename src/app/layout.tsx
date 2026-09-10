import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { PhoneShell } from "@/components/phone-shell";
import "./globals.css";

const plex = IBM_Plex_Sans_Arabic({
  variable: "--font-plex",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "بصمة حياة | Basmat Hayah",
  description:
    "بصمة حياة… أمان بلمسة واحدة — منصة التعرف الحيوي للطوارئ الصحية",
  applicationName: "Basmat Hayah",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#101c2e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ar" dir="rtl" className={`${plex.variable} h-full antialiased`}>
      <body className="min-h-full">
        <PhoneShell>{children}</PhoneShell>
      </body>
    </html>
  );
}
