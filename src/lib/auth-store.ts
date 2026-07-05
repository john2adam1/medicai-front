import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface AIRecommendation {
    topic: string;
    description: string;
}

interface AuthState {
    token: string | null;
    recommendations: AIRecommendation[] | null;
    setToken: (token: string | null) => void;
    setRecommendations: (recommendations: AIRecommendation[] | null) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            token: null,
            recommendations: null,
            setToken: (token) => set({ token }),
            setRecommendations: (recommendations) => set({ recommendations }),
            logout: () => set({ token: null, recommendations: null }),
        }),
        {
            name: 'medicai-auth-storage', // name of item in storage
        }
    )
);
