import { create } from "zustand";

const initialPlan = {
  id: "",
  title: "",
  description: "",
  includeHosting: false,
  includeSupport: false,
};

const usePlanStore = create((set) => ({
  planSelected: initialPlan,
  setPlanSelected: (plan) =>
    set({
      planSelected: {
        ...initialPlan,
        ...plan,
      },
    }),
  updatePlanSelected: (updates) =>
    set((state) => ({
      planSelected: {
        ...state.planSelected,
        ...updates,
      },
    })),
  resetPlan: () =>
    set({
      planSelected: initialPlan,
    }),
}));

export default usePlanStore;
