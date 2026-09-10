"use client";

import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import {
  BookIcon,
  CheckIcon,
  ClockIcon,
  DropletIcon,
  FileIcon,
  HeartbeatIcon,
  HeartIcon,
  NoteIcon,
  PhoneIcon,
  RefreshIcon,
  SendIcon,
  SirenIcon,
  ThermometerIcon,
  WarningIcon,
} from "@/components/icons";
import { ConfirmDialog, Sheet } from "@/components/overlays";
import { useToast } from "@/components/toast";
import { demoPatient } from "@/lib/patient";

const vitalIcon = {
  heart: HeartIcon,
  oxygen: DropletIcon,
  pressure: HeartbeatIcon,
  temp: ThermometerIcon,
};

export default function EmergencyPage() {
  const toast = useToast();
  const patient = demoPatient;
  const [notesOpen, setNotesOpen] = useState(false);
  const [protocolOpen, setProtocolOpen] = useState(false);
  const [ambulanceOpen, setAmbulanceOpen] = useState(false);
  const [notes, setNotes] = useState("");
  const [updatedLabel, setUpdatedLabel] = useState(patient.vitalsUpdatedAr);

  return (
    <div className="screen bg-page">
      <AppHeader
        titleAr="حالة الطوارئ"
        titleEn="Emergency Status"
        back
        icon={<HeartbeatIcon size={22} />}
      />

      <div className="screen-scroll px-3.5 pb-28 pt-3">
        <section className="critical-banner mb-3">
          <div className="mb-2 flex items-center justify-center gap-2 text-[15px] font-semibold">
            <span>تنبيه حرج</span>
            <WarningIcon size={18} />
          </div>
          <div className="text-[14px]">{patient.allergyAr}</div>
          <div className="mt-1 text-[11px] text-white/80">{patient.allergyEn}</div>
        </section>

        <section className="section-card mb-3">
          <div className="mb-1 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[14px] font-semibold text-navy-ink">
              <span>العلامات الحيوية</span>
              <HeartbeatIcon size={16} />
            </div>
            <div className="flex items-center gap-1 text-[11px] text-muted">
              <ClockIcon size={13} />
              <span>{updatedLabel}</span>
            </div>
          </div>
          <div className="vital-grid">
            {patient.vitals.map((vital) => {
              const Icon = vitalIcon[vital.icon];
              return (
                <div key={vital.id} className="vital-cell">
                  <div className="label">
                    <span>{vital.labelAr}</span>
                    <Icon size={14} />
                  </div>
                  <div className="value">{vital.value}</div>
                  <div className="unit">{vital.labelEn}</div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="ai-card mb-3">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="m-0 text-[15px] font-semibold text-navy-ink">
              {patient.aiAnalysis.titleAr}
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-success">
              <span>{patient.aiAnalysis.titleEn}</span>
              <CheckIcon size={16} />
            </div>
          </div>
          <p className="m-0 text-[14px] font-medium leading-6 text-navy-ink">
            {patient.aiAnalysis.diagnosisAr}
          </p>
          <p className="mt-1 mb-3 text-[11px] text-muted">
            {patient.aiAnalysis.diagnosisEn}
          </p>
          <ul className="m-0 list-none p-0 text-[13px] leading-7 text-navy-ink">
            {patient.aiAnalysis.stepsAr.map((step) => (
              <li key={step} className="flex gap-2">
                <span>•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="section-card mb-3">
          <div className="section-title">
            <div>
              <h2>معلومات طبية</h2>
              <span className="en">Medical Information</span>
            </div>
            <FileIcon size={18} className="text-navy-ink" />
          </div>
          <div className="medical-row">
            <span className="flex items-center gap-1 text-subtle">
              فصيلة الدم
            </span>
            <span className="text-[20px] font-semibold text-blood">
              {patient.bloodType}
            </span>
          </div>
          <div className="medical-row">
            <span className="text-subtle">الأمراض المزمنة</span>
            <span className="text-navy-ink">
              {patient.chronicConditions.map((item) => item.nameAr).join("، ")}
            </span>
          </div>
          <div className="medical-row">
            <span className="text-subtle">الأدوية الحالية</span>
            <span className="flex items-center gap-1 text-navy-ink">
              {patient.medications.map((item) => item.nameAr.split(" ")[0]).join("، ")}
            </span>
          </div>
        </section>

        <div className="mb-2 grid grid-cols-2 gap-2">
          <button
            type="button"
            className="navy-btn"
            onClick={() => toast("جاري الاتصال بالطوارئ — 997")}
          >
            <span>اتصال طوارئ</span>
            <PhoneIcon size={18} />
          </button>
          <button
            type="button"
            className="red-btn"
            onClick={() => setAmbulanceOpen(true)}
          >
            <span>طلب إسعاف</span>
            <SirenIcon size={18} />
          </button>
        </div>

        <button
          type="button"
          className="navy-btn mb-2"
          onClick={() => setNotesOpen(true)}
        >
          <span>تسجيل ملاحظات المسعف</span>
          <NoteIcon size={18} />
        </button>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            className="flex min-h-[46px] flex-col items-center justify-center rounded-[14px] bg-navy px-1 text-[10px] font-semibold text-white"
            onClick={() => setProtocolOpen(true)}
          >
            <BookIcon size={16} />
            <span className="mt-1">بدء دليل البروتوكول</span>
          </button>
          <button
            type="button"
            className="flex min-h-[46px] flex-col items-center justify-center rounded-[14px] bg-navy px-1 text-[10px] font-semibold text-white"
            onClick={() => {
              setUpdatedLabel("منذ لحظات");
              toast("تم تحديث العلامات الحيوية");
            }}
          >
            <RefreshIcon size={16} />
            <span className="mt-1">تحديث</span>
          </button>
          <button
            type="button"
            className="flex min-h-[46px] flex-col items-center justify-center rounded-[14px] bg-navy px-1 text-[10px] font-semibold text-white"
            onClick={() => toast("تم إرسال التقرير الكامل")}
          >
            <SendIcon size={16} />
            <span className="mt-1">إرسال التقرير الكامل</span>
          </button>
        </div>
      </div>

      <button
        type="button"
        className="sos-fab"
        onClick={() => toast("SOS — جاري إرسال موقع الحالة إلى 997")}
        aria-label="SOS"
      >
        SOS
      </button>

      <ConfirmDialog
        open={ambulanceOpen}
        onClose={() => setAmbulanceOpen(false)}
        title="طلب إسعاف"
        body="إرسال طلب إسعاف فوري لهذا الموقع؟ هذا نموذج تجريبي ولن يُرسل بلاغاً حقيقياً."
        confirmLabel="إرسال الطلب"
        danger
        onConfirm={() => toast("تم إرسال طلب الإسعاف")}
      />

      <Sheet
        open={notesOpen}
        onClose={() => setNotesOpen(false)}
        title="ملاحظات المسعف"
        subtitle="Paramedic notes"
      >
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          className="mb-3 min-h-[140px] w-full resize-none rounded-2xl border border-line bg-row p-3 text-[14px] outline-none"
          placeholder="اكتب الملاحظات الميدانية هنا…"
        />
        <button
          type="button"
          className="navy-btn"
          onClick={() => {
            toast("تم حفظ ملاحظات المسعف");
            setNotesOpen(false);
          }}
        >
          حفظ الملاحظات
        </button>
      </Sheet>

      <Sheet
        open={protocolOpen}
        onClose={() => setProtocolOpen(false)}
        title="دليل البروتوكول B"
        subtitle="Protocol B — demo copy only"
      >
        <p className="mt-0 mb-3 text-[13px] leading-6 text-subtle">
          {patient.aiAnalysis.diagnosisAr}
        </p>
        <ol className="m-0 list-decimal pr-5 text-[14px] leading-7 text-navy-ink">
          {patient.aiAnalysis.stepsAr.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Sheet>
    </div>
  );
}
