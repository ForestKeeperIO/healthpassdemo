import mitt from 'mitt';

export type RewardUnlockedPayload = {
  rewardId: string;
  title: string;
  description: string;
};

type MidnightApi = {
  submitProof: (payload: { activityHash: string }) => Promise<{ proofId: string }>;
  on: (event: 'RewardUnlocked', handler: (payload: RewardUnlockedPayload) => void) => void;
  off: (event: 'RewardUnlocked', handler: (payload: RewardUnlockedPayload) => void) => void;
};

const emitter = mitt<{ RewardUnlocked: RewardUnlockedPayload }>();

const mockApi: MidnightApi = {
  async submitProof(payload) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const proofId = crypto.randomUUID();
    setTimeout(() => {
      emitter.emit('RewardUnlocked', {
        rewardId: payload.activityHash.slice(0, 4),
        title: 'Consistency Streak',
        description: 'Completed five healthy days in a row.',
      });
    }, 2000);
    return { proofId };
  },
  on: (event, handler) => emitter.on(event, handler),
  off: (event, handler) => emitter.off(event, handler),
};

const midnightGlobal = (window as unknown as { midnight?: MidnightApi }).midnight;

export const midnightApi: MidnightApi = midnightGlobal ?? mockApi;
