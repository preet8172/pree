import { useEffect, useRef, useState } from 'react';

function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  const raf = useRef(null);

  useEffect(() => {
    const start = performance.now();
    const from = 0;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);

  return value;
}

export default function DashboardCard({ label, value, icon, gradient }) {
  const count = useCountUp(value);

  return (
    <div className="hover-lift surface relative overflow-hidden rounded-2xl p-5">
      <div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl"
        style={{ background: gradient }}
      />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-faint">{label}</p>
          <p className="font-display mt-2 text-3xl font-bold">{count}</p>
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ background: gradient }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
