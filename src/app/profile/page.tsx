"use client";

import { useState } from "react";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import {
  DropletIcon,
  FileIcon,
  LockIcon,
  PersonIcon,
  PhoneIcon,
  PillIcon,
} from "@/components/icons";
import { Ltr } from "@/components/ltr";
import { Sheet } from "@/components/overlays";
import { useToast } from "@/components/toast";
import { demoPatient } from "@/lib/patient";

export default function ProfilePage() {
  const [contactsOpen, setContactsOpen] = useState(false);
  const toast = useToast();
  const patient = demoPatient;

  return (
    <div className="screen bg-page">
      <AppHeader
        titleAr="الملف الصحي"
        titleEn="Health Profile"
        icon={<PersonIcon size={22} />}
      />

      <div className="screen-scroll px-4 pb-4 pt-4">
        <section className="section-card mb-3">
          <div className="section-title">
            <div>
              <h2>المعلومات الشخصية</h2>
              <span className="en">Personal Information</span>
            </div>
            <LockIcon size={18} className="text-navy-ink" />
          </div>
          <div className="info-row">
            <span className="label">الاسم</span>
            <span className="value">{patient.nameAr}</span>
          </div>
          <div className="info-row">
            <span className="label">العمر</span>
            <span className="value">
              <Ltr>{patient.age}</Ltr> سنة
            </span>
          </div>
          <div className="info-row">
            <span className="label">رقم الهوية</span>
            <span className="value">
              <Ltr>{patient.nationalId}</Ltr>
            </span>
          </div>
        </section>

        <section className="section-card mb-3">
          <div className="section-title">
            <div>
              <h2>فصيلة الدم</h2>
              <span className="en">Blood Type</span>
            </div>
            <DropletIcon size={18} className="text-navy-ink" />
          </div>
          <div className="blood-type">{patient.bloodType}</div>
        </section>

        <section className="section-card mb-3">
          <div className="section-title">
            <div>
              <h2>الأمراض المزمنة</h2>
              <span className="en">Chronic Diseases</span>
            </div>
            <FileIcon size={18} className="text-navy-ink" />
          </div>
          {patient.chronicConditions.map((item) => (
            <div key={item.id} className="soft-row">
              <div className="ar">{item.nameAr}</div>
              <div className="en">
                <Ltr>{item.nameEn}</Ltr>
              </div>
            </div>
          ))}
        </section>

        <section className="section-card mb-3">
          <div className="section-title">
            <div>
              <h2>الأدوية الحالية</h2>
              <span className="en">Current Medications</span>
            </div>
            <PillIcon size={18} className="text-navy-ink" />
          </div>
          {patient.medications.map((item) => (
            <div key={item.id} className="soft-row">
              <div className="ar">
                {item.nameAr} {item.doseAr}
              </div>
              <div className="en">
                <Ltr>
                  {item.nameEn} — {item.doseEn}
                </Ltr>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="px-4 pb-1">
        <button
          type="button"
          className="navy-btn mb-3"
          onClick={() => setContactsOpen(true)}
        >
          <span>جهات الاتصال للطوارئ</span>
        </button>
      </div>
      <BottomNav variant="light" />

      <Sheet
        open={contactsOpen}
        onClose={() => setContactsOpen(false)}
        title="جهات الاتصال للطوارئ"
        subtitle="Emergency Contacts"
      >
        <div className="flex flex-col gap-2">
          {patient.emergencyContacts.map((contact) => (
            <button
              key={contact.id}
              type="button"
              className="flex items-center justify-between rounded-2xl bg-row px-4 py-3 text-start"
              onClick={() => {
                toast(`جاري الاتصال بـ ${contact.nameAr}`);
                setContactsOpen(false);
              }}
            >
              <div>
                <div className="text-[14px] font-medium text-navy-ink">
                  {contact.nameAr}
                </div>
                <div className="mt-1 text-[11px] text-muted">
                  {contact.relationAr} / {contact.relationEn} — {contact.phone}
                </div>
              </div>
              <PhoneIcon size={18} className="text-navy" />
            </button>
          ))}
        </div>
      </Sheet>
    </div>
  );
}
