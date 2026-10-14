import { useEvents } from '../context/EventContext';

const TONE_STYLES = {
  success: { border: 'var(--color-success)', icon: <path d="m5 13 4 4L19 7" /> },
  danger: { border: 'var(--color-danger)', icon: <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /> },
  info: { border: 'var(--color-secondary)', icon: <><circle cx="12" cy="12" r="9" /><path d="M12 8h.01M11 12h1v4h1" /></> },
};

export default function ToastStack() {
  const { toasts, dismissToast } = useEvents();

  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed top-4 right-4 z-[60] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2 sm:right-6 sm:top-6">
      {toasts.map((toast) => {
        const style = TONE_STYLES[toast.tone] || TONE_STYLES.success;
        return (
          <div
            key={toast.id}
            className="animate-toastIn glass pointer-events-auto flex items-center gap-3 rounded-xl border-l-4 px-4 py-3 shadow-lg"
            style={{ borderLeftColor: style.border }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={style.border} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
              {style.icon}
            </svg>
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button onClick={() => dismissToast(toast.id)} aria-label="Dismiss" className="text-faint hover:text-[var(--ink)]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}
