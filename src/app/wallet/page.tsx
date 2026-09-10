"use client";

import Link from "next/link";
import { BottomNav } from "@/components/bottom-nav";
import { CheckIcon, FingerprintIcon } from "@/components/icons";
import { demoPatient, brand } from "@/lib/patient";

export default function WalletPage() {
  const patient = demoPatient;

  return (
    <div className="screen bg-page">
      <div className="screen-scroll px-5 pb-4 pt-8">
        <div className="mb-5 text-center">
          <h1 className="m-0 text-[18px] font-semibold text-navy-ink">المحفظة الصحية</h1>
          <p className="mt-1 mb-0 text-[11px] text-muted">Health Wallet / Secure-Scan ID</p>
        </div>

        <section className="overflow-hidden rounded-[22px] bg-navy p-5 text-white shadow-lg">
          <div className="mb-8 flex items-start justify-between">
            <div className="text-start">
              <div className="text-[11px] text-white/50">فصيلة الدم</div>
              <div className="text-[28px] font-semibold text-blood">{patient.bloodType}</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
              <FingerprintIcon size={26} />
            </div>
          </div>
          <div className="text-[20px] font-semibold">{patient.nameAr}</div>
          <div className="mt-1 text-[12px] text-white/50">{patient.nameEn}</div>
          <div className="mt-5 flex items-end justify-between">
            <div>
              <div className="text-[11px] text-white/45">رقم الهوية</div>
              <div className="mt-1 text-[15px] tracking-wide">{patient.nationalId}</div>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-success">
              <CheckIcon size={14} />
              <span>{brand.mohAr}</span>
            </div>
          </div>
        </section>

        <p className="mt-5 text-center text-[12px] leading-6 text-subtle">
          بطاقة التعرف الحيوي التجريبية. يمكن للمسعف فتح حالة الطوارئ بعد مسح البصمة.
        </p>
        <Link href="/emergency" className="navy-btn mt-4 no-underline">
          عرض حالة الطوارئ
        </Link>
      </div>
      <BottomNav variant="light" />
    </div>
  );
}
