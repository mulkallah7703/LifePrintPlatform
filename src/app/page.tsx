"use client";

import { useRouter } from "next/navigation";
import { CircleHeartbeatIcon, CirclePersonIcon } from "@/components/icons";
import { brand } from "@/lib/patient";
import { setAccessRole } from "@/lib/role";

export default function AccessTypePage() {
  const router = useRouter();

  return (
    <div className="screen bg-page">
      <div className="screen-scroll px-6">
        <div className="flex min-h-full flex-col pb-10 pt-[86px]">
          <div className="mb-14 text-center">
            <h1 className="m-0 text-[22px] font-semibold tracking-tight text-navy-ink">
              {brand.nameAr}
            </h1>
            <p className="mt-3 mb-0 text-[13px] text-subtle">اختر نوع الدخول</p>
            <p className="mt-1 mb-0 text-[11px] text-muted">Select Access Type</p>
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="button"
              className="access-card"
              onClick={() => {
                setAccessRole("citizen");
                router.push("/home");
              }}
            >
              <CirclePersonIcon size={58} />
              <div className="text-center">
                <div className="text-[16px] font-semibold text-navy-ink">
                  مواطن / مريض
                </div>
                <div className="mt-1 text-[12px] text-muted">
                  Patient / Citizen
                </div>
              </div>
            </button>

            <button
              type="button"
              className="access-card"
              onClick={() => {
                setAccessRole("paramedic");
                router.push("/scan?next=emergency");
              }}
            >
              <CircleHeartbeatIcon size={58} />
              <div className="text-center">
                <div className="text-[16px] font-semibold text-navy-ink">
                  مسعف / طاقم طبي
                </div>
                <div className="mt-1 text-[12px] text-muted">
                  Paramedic / Medical Staff
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
