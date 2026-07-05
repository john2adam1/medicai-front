"use client";

import React from 'react';
import { User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useGameStore } from '@/lib/store';
import { useTranslation } from '@/lib/i18n';

export default function ProfileWidget({ className = "" }: { className?: string }) {
    const router = useRouter();
    const { score } = useGameStore();
    const { t } = useTranslation();

    return (
        <div
            onClick={() => router.push('/profile')}
            className={`p-3 bg-[var(--color-surface-2)] cursor-pointer hover:bg-[var(--color-surface)] hover:brightness-105 transition-all border border-[var(--color-border)] rounded-xl sm:rounded-none sm:border-x-0 sm:border-b-0 ${className}`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <User className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[var(--color-text)]">{t('profile')}</p>
                        <p className="text-[10px] text-[var(--color-text-3)] font-mono">{score} {t('pts')}</p>
                    </div>
                </div>
                <button
                    onClick={(e) => { e.stopPropagation(); router.push('/profile?tab=subscription'); }}
                    className="text-[10px] font-bold text-[var(--color-bg)] px-2 py-1.5 rounded bg-[var(--color-accent-yellow)] hover:brightness-110 shadow-sm transition-all"
                >
                    {t('subscribe')}
                </button>
            </div>
        </div>
    );
}
