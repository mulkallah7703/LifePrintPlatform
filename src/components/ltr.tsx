type LtrProps = {
  children: React.ReactNode;
  className?: string;
};

/** Keep IDs, vitals, blood type, and Latin strings in visual LTR order inside RTL layout. */
export function Ltr({ children, className }: LtrProps) {
  return (
    <span dir="ltr" className={`ltr ${className ?? ""}`.trim()}>
      {children}
    </span>
  );
}
