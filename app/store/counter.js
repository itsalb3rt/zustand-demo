import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count1: 0,
  count2: 0,
  count3: 0,
  incrementCount1: () => set((state) => ({ count1: state.count1 + 1 })),
  incrementCount2: () => set((state) => ({ count2: state.count2 + 1 })),
  incrementCount3: () => set((state) => ({ count3: state.count3 + 1 })),
}));

export default useCounterStore;
