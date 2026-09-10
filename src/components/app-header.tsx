"use client";

import { useRouter } from "next/navigation";
import { BackArrowIcon } from "./icons";

type AppHeaderProps = {
  titleAr: string;
  titleEn: string;
  icon?: React.ReactNode;
  back?: boolean;
};

export function AppHeader({ titleAr, titleEn, icon, back }: AppHeaderProps) {
  const router = useRouter();

  return (
    <header
      dir="ltr"
      className="grid h-[72px] shrink-0 grid-cols-[44px_1fr_44px] items-center bg-navy px-4 text-white"
    >
      <div className="flex justify-start">
        {back ? (
          <button
            type="button"
            aria-label="رجوع"
            className="flex h-10 w-10 items-center justify-center text-white"
            onClick={() => router.back()}
          >
            <span className="rotate-180">
              <BackArrowIcon size={22} />
            </span>
          </button>
        ) : (
          <span className="flex h-10 w-10 items-center justify-center text-white">
            {icon}
          </span>
        )}
      </div>
      <div className="text-center" dir="rtl">
        <div className="text-[18px] font-semibold leading-none">{titleAr}</div>
        <div className="mt-1.5 text-[11px] font-normal text-white/55">{titleEn}</div>
      </div>
      <div className="flex justify-end text-white">
        {back ? icon : <span className="w-6" />}
      </div>
    </header>
  );
}
