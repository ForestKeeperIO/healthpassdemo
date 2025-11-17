import { ReactNode } from 'react';

export const StatsCard = ({
  title,
  value,
  trend,
  icon,
}: {
  title: string;
  value: string;
  trend: string;
  icon: ReactNode;
}) => (
  <div className="rounded-3xl bg-white/5 p-5">
    <div className="mb-4 flex items-center justify-between">
      <p className="text-sm uppercase tracking-[0.3em] text-white/60">{title}</p>
      <div className="rounded-full bg-white/10 p-2 text-white/80">{icon}</div>
    </div>
    <p className="text-4xl font-semibold">{value}</p>
    <p className="text-sm text-emerald">{trend}</p>
  </div>
);
