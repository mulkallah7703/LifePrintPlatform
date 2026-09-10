# بصمة حياة — Basmat Hayah (LifePrint / Secure-Scan ID)

Arabic-first bilingual (AR + EN) RTL emergency biometric health prototype.

Slogan: **بصمة حياة… أمان بلمسة واحدة**

The repository was an empty `LifePrintPlatform` stub, so this app is a **Next.js App Router + TypeScript + Tailwind CSS** mobile-web prototype. That stack matches a production-ready web/PWA surface reviewers can run in a browser, while the UI is framed at **~390×844** to match the Figma phone screens.

There is **no live Ministry of Health or biometric API**. Patient data lives in `src/lib/patient.ts` so it can be swapped later.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

Requires Node.js 20+.

## Screens (mapped to the Figma attachments)

| Route | Screen | Figma file |
| --- | --- | --- |
| `/` | Access type — مواطن/مريض and مسعف/طاقم طبي | `access-type-select.jpeg` |
| `/home` | Citizen splash — fingerprint, MoH status, bottom nav | `splash-and-health-profile.jpeg` (left) |
| `/profile` | Health profile — personal info, O+, chronic diseases, meds, emergency contacts | `splash-and-health-profile.jpeg` (right) + `health-profile-meds.jpeg` |
| `/emergency` | Emergency status — critical allergy, vitals, AI Protocol B, medical info, actions | `emergency-vitals-actions.jpeg`, `emergency-status-vitals.jpeg`, `emergency-status-ai.jpeg`, `emergency-ai-medical.jpeg`, `emergency-full-protocol.jpeg` |
| `/scan?next=profile\|emergency` | Biometric scan mock used by both roles | Transition between splash / paramedic path |
| `/wallet` | Digital Secure-Scan ID card (supports the Home/Wallet/Profile tab) | Implied by splash bottom nav |

## Navigation

1. **Citizen / Patient** → `/home`. Tap the fingerprint to mock a scan, then open the health profile. Bottom nav: Home, Wallet, Profile.
2. **Paramedic / Medical Staff** → `/scan?next=emergency` → Emergency Status for Ahmed Mohammed Al-Ali.
3. Emergency contacts, 997 call, ambulance request, paramedic notes, Protocol B guide, refresh, and full report are **UI stubs** (toast / confirm / sheet). Nothing is sent to a real dispatch system.

## Demo patient

Defined in `src/lib/patient.ts`:

- **أحمد محمد العلي** / Ahmed Mohammed Al-Ali
- Age 35, national ID `1234567890`, blood type **O+**
- Chronic: type 2 diabetes, hypertension
- Meds: Metformin 500mg BID, Amlodipine 5mg daily
- Critical alert: severe penicillin allergy
- Vitals: HR 92, SpO₂ 95%, BP 140/90, temp 36.8°C
- AI copy is **only** the Figma Protocol B demo text — not medical advice

## Brand

- Primary navy `#101c2e`
- Page background `#f3f3f4`
- Critical / ambulance / SOS red `#e03a3a`
- Blood type `#e35d5d`
- IBM Plex Sans Arabic for Arabic + Latin
- `dir="rtl"` and `lang="ar"` on the document

## Project layout

```
src/app/            routes (App Router)
src/components/     phone frame, header, nav, toasts, overlays, icons
src/lib/patient.ts  mock record (swap point for a future API)
src/lib/role.ts     session role (citizen | paramedic)
```

Desktop preview is a centered iPhone-like frame. On a phone-width viewport the chrome drops away and the UI goes full-bleed.
