import { ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const AdminStats = () => (
  <div className="rounded-3xl bg-white/5 p-6">
    <div className="mb-4 flex items-center gap-3">
      <UserGroupIcon className="h-8 w-8 text-emerald" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Admin</p>
        <h3 className="text-xl font-semibold">Aggregated stats</h3>
      </div>
    </div>
    <dl className="grid gap-4 md:grid-cols-2">
      <div>
        <dt className="text-sm text-white/60">Participants</dt>
        <dd className="text-3xl font-semibold">1,248</dd>
      </div>
      <div>
        <dt className="text-sm text-white/60">Proof success rate</dt>
        <dd className="text-3xl font-semibold text-emerald">96%</dd>
      </div>
      <div>
        <dt className="text-sm text-white/60">Average steps</dt>
        <dd className="text-3xl font-semibold">8,420</dd>
      </div>
      <div>
        <dt className="text-sm text-white/60">Average sleep</dt>
        <dd className="text-3xl font-semibold">7.3 h</dd>
      </div>
    </dl>
    <div className="mt-6 rounded-2xl border border-white/10 p-4">
      <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
        <ChartBarIcon className="h-5 w-5" />
        Encrypted trendline
      </div>
      <div className="h-24 w-full rounded-xl bg-gradient-to-r from-lilac/20 to-midnight-500/40" />
    </div>
    <p className="mt-3 text-xs text-white/60">
      Aggregated insights only. Raw participant data never leaves the device.
    </p>
  </div>
);
