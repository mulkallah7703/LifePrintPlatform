export type AccessRole = "citizen" | "paramedic";

export type ChronicCondition = {
  id: string;
  nameAr: string;
  nameEn: string;
};

export type Medication = {
  id: string;
  nameAr: string;
  nameEn: string;
  doseAr: string;
  doseEn: string;
};

export type EmergencyContact = {
  id: string;
  nameAr: string;
  nameEn: string;
  relationAr: string;
  relationEn: string;
  phone: string;
};

export type VitalSign = {
  id: string;
  labelAr: string;
  labelEn: string;
  value: string;
  unit: string;
  icon: "heart" | "oxygen" | "pressure" | "temp";
};

export type PatientRecord = {
  nationalId: string;
  nameAr: string;
  nameEn: string;
  age: number;
  bloodType: string;
  allergyAr: string;
  allergyEn: string;
  chronicConditions: ChronicCondition[];
  medications: Medication[];
  emergencyContacts: EmergencyContact[];
  vitals: VitalSign[];
  vitalsUpdatedAr: string;
  vitalsUpdatedEn: string;
  aiAnalysis: {
    titleAr: string;
    titleEn: string;
    diagnosisAr: string;
    diagnosisEn: string;
    stepsAr: string[];
  };
};
