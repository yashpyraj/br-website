import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    isAdmin: false,
    setIsAdmin: (status) => set({ isAdmin: status }),
}));
