import type { PatientRecord } from "./types";

/** Demo record matching the Figma mocks. Swap this module for a live MoH/API client later. */
export const demoPatient: PatientRecord = {
  nationalId: "1234567890",
  nameAr: "أحمد محمد العلي",
  nameEn: "Ahmed Mohammed Al-Ali",
  age: 35,
  bloodType: "O+",
  allergyAr: "حساسية شديدة من البنسلين",
  allergyEn: "CRITICAL: Severe Penicillin Allergy",
  chronicConditions: [
    {
      id: "dm2",
      nameAr: "السكري - النوع الثاني",
      nameEn: "Diabetes Type 2",
    },
    {
      id: "htn",
      nameAr: "ضغط الدم",
      nameEn: "Hypertension",
    },
  ],
  medications: [
    {
      id: "metformin",
      nameAr: "ميتفورمين 500 ملغ",
      nameEn: "Metformin 500mg",
      doseAr: "مرتين يومياً",
      doseEn: "twice daily",
    },
    {
      id: "amlodipine",
      nameAr: "أملوديبين 5 ملغ",
      nameEn: "Amlodipine 5mg",
      doseAr: "مرة يومياً",
      doseEn: "once daily",
    },
  ],
  emergencyContacts: [
    {
      id: "spouse",
      nameAr: "فاطمة العلي",
      nameEn: "Fatimah Al-Ali",
      relationAr: "الزوجة",
      relationEn: "Spouse",
      phone: "0501234567",
    },
    {
      id: "son",
      nameAr: "محمد أحمد العلي",
      nameEn: "Mohammed Ahmed Al-Ali",
      relationAr: "الابن",
      relationEn: "Son",
      phone: "0557654321",
    },
  ],
  vitals: [
    {
      id: "hr",
      labelAr: "معدل القلب",
      labelEn: "BPM",
      value: "92",
      unit: "",
      icon: "heart",
    },
    {
      id: "spo2",
      labelAr: "الأكسجين",
      labelEn: "SpO₂",
      value: "95%",
      unit: "",
      icon: "oxygen",
    },
    {
      id: "temp",
      labelAr: "الحرارة",
      labelEn: "Celsius",
      value: "36.8°",
      unit: "",
      icon: "temp",
    },
    {
      id: "bp",
      labelAr: "ضغط الدم",
      labelEn: "mmHg",
      value: "140/90",
      unit: "",
      icon: "pressure",
    },
  ],
  vitalsUpdatedAr: "منذ دقيقة",
  vitalsUpdatedEn: "1 min ago",
  aiAnalysis: {
    titleAr: "تحليل ذكي",
    titleEn: "AI",
    diagnosisAr: "احتمالية صدمة نقص السكر — ابدأ البروتوكول B",
    diagnosisEn: "Possible hypoglycemic shock – Initiate Protocol B",
    stepsAr: [
      "فحص مستوى السكر فوراً",
      "جهز محلول الجلوكوز 50%",
      "مراقبة مستمرة للوعي",
    ],
  },
};

export const brand = {
  nameAr: "بصمة حياة",
  nameEn: "Basmat Hayah",
  slogan: "بصمة حياة… أمان بلمسة واحدة",
  subtitleAr: "نظام التعرف الحيوي للطوارئ",
  subtitleEn: "Biometric Emergency Identification System",
  mohAr: "متصل بوزارة الصحة",
  mohEn: "Connected to Ministry of Health",
  footerAr: "نظام الطوارئ الصحية الوطني",
  footerEn: "National Health Emergency System",
};
