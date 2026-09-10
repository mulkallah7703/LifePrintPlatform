"use client";

import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";
import { CheckIcon, FingerprintIcon } from "@/components/icons";
import { Ltr } from "@/components/ltr";
import { brand } from "@/lib/patient";

export default function HomePage() {
  return (
    <div className="screen bg-navy text-white">
      <div className="screen-scroll">
        <div className="flex min-h-full flex-col items-center px-8 pb-4 pt-16 text-center">
          <Link
            href="/scan?next=profile"
            className="relative mb-8 flex h-[168px] w-[168px] items-center justify-center rounded-full bg-[#e8eef4] text-navy shadow-[0_0_0_18px_rgba(232,238,244,0.08)]"
            aria-label="مسح البصمة"
          >
            <span className="absolute inset-0 animate-pulse rounded-full bg-white/0" />
            <FingerprintIcon size={86} />
          </Link>

          <h1 className="m-0 text-[28px] font-semibold">{brand.nameAr}</h1>
          <p className="mt-2 mb-0 text-[14px] text-white/55">
            <Ltr>{brand.nameEn}</Ltr>
          </p>
          <p className="mt-3 mb-0 max-w-[240px] text-[13px] leading-6 text-white/70">
            {brand.subtitleAr}
          </p>

          <div className="mt-10 flex flex-col items-center gap-1">
            <div className="flex items-center gap-2 text-[13px] text-white">
              <CheckIcon size={16} className="text-success" />
              <span>{brand.mohAr}</span>
            </div>
            <p className="m-0 text-[11px] text-white/45">
              <Ltr>{brand.mohEn}</Ltr>
            </p>
          </div>

          <div className="mt-auto pt-16">
            <p className="m-0 text-[12px] text-white/70">{brand.footerAr}</p>
            <p className="mt-1 mb-2 text-[11px] text-white/40">
              <Ltr>{brand.footerEn}</Ltr>
            </p>
          </div>
        </div>
      </div>
      <BottomNav variant="dark" />
    </div>
  );
}
