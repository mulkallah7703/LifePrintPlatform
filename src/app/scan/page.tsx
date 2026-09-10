"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { FingerprintIcon } from "@/components/icons";

function ScanContent() {
  const router = useRouter();
  const params = useSearchParams();
  const next = params.get("next") === "emergency" ? "/emergency" : "/profile";
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1700;
    const tick = window.setInterval(() => {
      const value = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(tick);
        router.replace(next);
      }
    }, 40);
    return () => window.clearInterval(tick);
  }, [next, router]);

  return (
    <div className="screen bg-navy text-white">
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="relative mb-8 flex h-[168px] w-[168px] items-center justify-center">
          <span className="absolute inset-[-18px] animate-ping rounded-full bg-white/10" />
          <span className="absolute inset-0 rounded-full bg-[#e8eef4]" />
          <FingerprintIcon size={86} className="relative text-navy" />
        </div>
        <h1 className="m-0 text-[22px] font-semibold">جاري التحقق الحيوي</h1>
        <p className="mt-2 mb-8 text-[12px] text-white/50">
          Verifying biometric identity
        </p>
        <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full rounded-full bg-success transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-6 text-[12px] text-white/45">
          متصل بوزارة الصحة — Secure-Scan ID
        </p>
      </div>
    </div>
  );
}

export default function ScanPage() {
  return (
    <Suspense
      fallback={
        <div className="screen bg-navy text-white">
          <div className="flex flex-1 items-center justify-center">جاري التحميل…</div>
        </div>
      }
    >
      <ScanContent />
    </Suspense>
  );
}
