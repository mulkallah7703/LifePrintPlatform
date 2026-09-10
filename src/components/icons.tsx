import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Svg({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PersonIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="7.6" r="3.5" fill="currentColor" />
      <path
        d="M5.1 19.6c.35-4.05 2.95-6.15 6.9-6.15s6.55 2.1 6.9 6.15"
        fill="currentColor"
      />
    </Svg>
  );
}

export function HeartbeatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M2.8 12.2h3.1l1.7-4.6 2.9 9.2 2.4-4.6H21.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function FingerprintIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 3.6c-3.6 0-6.5 2.8-6.5 7.1 0 2.2.4 4.5.4 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 3.6c3.6 0 6.5 2.8 6.5 7.1 0 1.6-.2 3.1-.2 3.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.1 8.2c.7-1.6 2.1-2.5 3.9-2.5 2.4 0 4.1 1.8 4.1 4.6 0 3.4-.7 6.2-.7 6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.4 11.2c.1 1.8.6 4.4.6 4.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11.2 10.4c0 2.8-.3 6.4-.3 6.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.6 12.1c-.2 2.6-.8 5.3-.8 5.3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.2 13.6c-.6 2.1-1.4 3.6-2.2 4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16.6 14.8c.6 1.6 1.6 2.9 2.6 3.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M4.5 10.8 12 4.8l7.5 6V19a1.2 1.2 0 0 1-1.2 1.2h-4.2v-5.1h-4.2v5.1H5.7A1.2 1.2 0 0 1 4.5 19v-8.2Z"
        fill="currentColor"
      />
    </Svg>
  );
}

export function WalletIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect
        x="4"
        y="7"
        width="16"
        height="11.5"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="M4 10.2h16" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.2" cy="14.2" r="1" fill="currentColor" />
    </Svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect
        x="6.2"
        y="10.4"
        width="11.6"
        height="8.4"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M8.4 10.4V8.3a3.6 3.6 0 0 1 7.2 0v2.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function DropletIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 3.8c2.8 3.4 5.4 6.6 5.4 9.4A5.4 5.4 0 1 1 6.6 13.2C6.6 10.4 9.2 7.2 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function FileIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M7.2 4.6h6.2L17.8 9v10.4H7.2V4.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M13.2 4.6V9h4.4" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function PillIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect
        x="4.4"
        y="9.2"
        width="15.2"
        height="5.6"
        rx="2.8"
        transform="rotate(-35 12 12)"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M9.6 8.8 15.2 15.2" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8.2 4.8h2.1l1.1 3.1-1.4 1.1a11.2 11.2 0 0 0 5 5l1.1-1.4 3.1 1.1v2.1c0 .8-.7 1.6-1.5 1.6C9.8 17.4 6.6 14.2 6.6 6.3c0-.8.8-1.5 1.6-1.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function AmbulanceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M3.6 14.4V8.6A1.6 1.6 0 0 1 5.2 7h8.2v7.4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M13.4 10.2h3.2L19.4 13v1.4h-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="7.2" cy="16.6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.4" cy="16.6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.8 9.4h2.6M10.1 8.1v2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </Svg>
  );
}

export function NoteIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M7 4.8h10A1.6 1.6 0 0 1 18.6 6.4v11.4L15.8 15H7A1.6 1.6 0 0 1 5.4 13.4V6.4A1.6 1.6 0 0 1 7 4.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.6 8.4h6.8M8.6 11.2h4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Svg>
  );
}

export function WarningIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 4.4 20.4 19H3.6L12 4.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 10v4.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="12" cy="16.6" r="0.8" fill="currentColor" />
    </Svg>
  );
}

export function SirenIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8 13.2V10a4 4 0 0 1 8 0v3.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M5.6 13.2h12.8v3.4H5.6z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 3.6v1.6M4.8 7.2l1.3.9M19.2 7.2l-1.3.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.4 12.2 10.8 14.6 15.6 9.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="7.4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 8.4V12l2.6 1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M12 19s-6.4-4-8.1-7.2C2.4 9.4 3.6 6.6 6.4 6.2c1.6-.2 3.1.5 3.8 1.8.7-1.3 2.2-2 3.8-1.8 2.8.4 4 3.2 2.5 5.6C18.4 15 12 19 12 19Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ThermometerIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M10.4 13.6V6.8a1.6 1.6 0 1 1 3.2 0v6.8a2.8 2.8 0 1 1-3.2 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </Svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M14.4 6.6 8.8 12l5.6 5.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BackArrowIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M14.8 5.8 8.4 12l6.4 6.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function BookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M5.6 5.2h10.2A2.2 2.2 0 0 1 18 7.4v11.2H7.6A2 2 0 0 1 5.6 16.6V5.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M5.6 16.6h12.4" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M4.6 12 19.2 5.4 15 18.8l-3.2-5.2L4.6 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function RefreshIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M19.2 12a7.2 7.2 0 1 1-2.1-5.1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M19.2 4.8v4.2h-4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function SosIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M4 13.6c0-5.2 3.4-8.8 8-8.8s8 3.6 8 8.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M8.2 13.8c.4-2.2 1.8-3.5 3.8-3.5s3.4 1.3 3.8 3.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16.8" r="1.2" fill="currentColor" />
    </Svg>
  );
}

export function CirclePersonIcon({ size = 56 }: { size?: number }) {
  return (
    <span
      className="icon-bubble"
      style={{ width: size, height: size }}
    >
      <PersonIcon size={size * 0.46} />
    </span>
  );
}

export function CircleHeartbeatIcon({ size = 56 }: { size?: number }) {
  return (
    <span
      className="icon-bubble"
      style={{ width: size, height: size }}
    >
      <HeartbeatIcon size={size * 0.48} />
    </span>
  );
}
