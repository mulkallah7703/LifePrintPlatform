"use client";

type OverlayProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Overlay({ open, onClose, children }: OverlayProps) {
  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose} role="presentation">
      <div onClick={(event) => event.stopPropagation()}>{children}</div>
    </div>
  );
}

type ConfirmProps = {
  open: boolean;
  title: string;
  body: string;
  confirmLabel: string;
  cancelLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
  onClose: () => void;
};

export function ConfirmDialog({
  open,
  title,
  body,
  confirmLabel,
  cancelLabel = "إلغاء",
  danger,
  onConfirm,
  onClose,
}: ConfirmProps) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
        <h3 id="confirm-title" className="m-0 text-[17px] font-semibold text-navy-ink">
          {title}
        </h3>
        <p className="mt-2 mb-5 text-[13px] leading-6 text-subtle">{body}</p>
        <div className="flex gap-2">
          <button type="button" className="navy-btn" onClick={onClose}>
            {cancelLabel}
          </button>
          <button
            type="button"
            className={danger ? "red-btn" : "navy-btn"}
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </Overlay>
  );
}

type SheetProps = OverlayProps & {
  title: string;
  subtitle?: string;
};

export function Sheet({ open, onClose, title, subtitle, children }: SheetProps) {
  return (
    <Overlay open={open} onClose={onClose}>
      <div className="sheet" role="dialog" aria-modal="true">
        <div className="mb-4 text-center">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-[#d9d9de]" />
          <h3 className="m-0 text-[16px] font-semibold text-navy-ink">{title}</h3>
          {subtitle ? (
            <p className="mt-1 mb-0 text-[11px] text-muted">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </div>
    </Overlay>
  );
}
