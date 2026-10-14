import { useEffect } from 'react';

export default function ConfirmationModal({
  open,
  title = 'Are you sure?',
  message,
  confirmLabel = 'Delete',
  cancelLabel = 'Cancel',
  tone = 'danger',
  onConfirm,
  onCancel,
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onCancel?.();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onCancel]);

  if (!open) return null;

  const accent = tone === 'danger' ? 'var(--color-danger)' : 'var(--color-primary)';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 animate-fadeIn bg-slate-900/40 backdrop-blur-sm"
        onClick={onCancel}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="animate-zoomIn surface relative w-full max-w-sm rounded-2xl p-6 shadow-2xl"
      >
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: `color-mix(in srgb, ${accent} 14%, transparent)` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6M14 11v6" />
          </svg>
        </div>
        <h3 id="confirm-title" className="mt-4 text-center font-display text-lg font-semibold">
          {title}
        </h3>
        {message && <p className="mt-2 text-center text-sm text-soft">{message}</p>}
        <div className="mt-6 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl surface py-2.5 text-sm font-semibold transition-colors hover:bg-[var(--bg)]"
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            style={{ background: accent }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
