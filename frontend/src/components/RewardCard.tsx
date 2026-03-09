import { GiftIcon } from '@heroicons/react/24/outline';

export const RewardCard = ({
  title,
  description,
  unlocked,
}: {
  title: string;
  description: string;
  unlocked: boolean;
}) => (
  <div className={`rounded-2xl border p-4 ${unlocked ? 'border-emerald/60 bg-emerald/10' : 'border-white/10'}`}>
    <div className="mb-3 flex items-center gap-3">
      <GiftIcon className={`h-6 w-6 ${unlocked ? 'text-emerald' : 'text-white/60'}`} />
      <div>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
    <span className={`text-xs uppercase tracking-[0.3em] ${unlocked ? 'text-emerald' : 'text-white/50'}`}>
      {unlocked ? 'Unlocked' : 'Locked'}
    </span>
  </div>
);
