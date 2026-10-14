import { useNavigate } from 'react-router-dom';

export default function BackButton({ to, label = 'Back', className = '' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    else navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center gap-2 text-sm font-medium text-soft transition-colors hover:text-[var(--color-primary)] ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full surface transition-transform group-hover:-translate-x-0.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
      </span>
      {label}
    </button>
  );
}
