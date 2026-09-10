"use client";

import Link from "next/link";
import { CircleHeartbeatIcon, CirclePersonIcon } from "@/components/icons";
import { Ltr } from "@/components/ltr";
import { brand } from "@/lib/patient";
import { setAccessRole } from "@/lib/role";

export default function AccessTypePage() {
  return (
    <div className="screen bg-page">
      <div className="screen-scroll px-6">
        <div className="flex min-h-full flex-col pb-10 pt-[86px]">
          <div className="mb-14 text-center">
            <h1 className="m-0 text-[22px] font-semibold tracking-tight text-navy-ink">
              {brand.nameAr}
            </h1>
            <p className="mt-3 mb-0 text-[13px] text-subtle">اختر نوع الدخول</p>
            <p className="mt-1 mb-0 text-[11px] text-muted">
              <Ltr>Select Access Type</Ltr>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/home"
              className="access-card no-underline"
              onClick={() => setAccessRole("citizen")}
            >
              <CirclePersonIcon size={58} />
              <div className="text-center">
                <div className="text-[16px] font-semibold text-navy-ink">
                  مواطن / مريض
                </div>
                <div className="mt-1 text-[12px] text-muted">
                  <Ltr>Patient / Citizen</Ltr>
                </div>
              </div>
            </Link>

            <Link
              href="/scan?next=emergency"
              className="access-card no-underline"
              onClick={() => setAccessRole("paramedic")}
            >
              <CircleHeartbeatIcon size={58} />
              <div className="text-center">
                <div className="text-[16px] font-semibold text-navy-ink">
                  مسعف / طاقم طبي
                </div>
                <div className="mt-1 text-[12px] text-muted">
                  <Ltr>Paramedic / Medical Staff</Ltr>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
