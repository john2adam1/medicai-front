"use client";

import React from 'react';
import { ArrowLeft, User, Settings, CreditCard, Palette, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslation, useI18n, Language } from '@/lib/i18n';

export default function ProfilePage() {
    const router = useRouter();
    const { t } = useTranslation();
    const { lang, setLang } = useI18n();

    return (
        <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex justify-center p-6">
            <div className="w-full max-w-2xl">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm text-[var(--color-text-3)] hover:text-[var(--color-text)] mb-6 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> {t('back')}
                </button>

                <h1 className="text-2xl font-bold mb-8">{t('settings')}</h1>

                <div className="space-y-4">
                    <div className="card p-5 border border-[var(--color-border)] flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">{t('language')}</h3>
                            </div>
                        </div>
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value as Language)}
                            className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg px-3 py-1.5 text-sm"
                        >
                            <option value="uz">O'zbek</option>
                            <option value="en">English</option>
                            <option value="ru">Русский</option>
                        </select>
                    </div>

                    <div className="card p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">{t('personal_info')}</h3>
                            <p className="text-xs text-[var(--color-text-3)]">{t('personal_desc')}</p>
                        </div>
                    </div>

                    <div className="card p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-accent-yellow)]/10 flex items-center justify-center text-[var(--color-accent-yellow)]">
                            <CreditCard className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">{t('payment')}</h3>
                            <p className="text-xs text-[var(--color-text-3)]">{t('payment_desc')}</p>
                        </div>
                    </div>

                    <div className="card p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                            <Palette className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">{t('design')}</h3>
                            <p className="text-xs text-[var(--color-text-3)]">{t('design_desc')}</p>
                        </div>
                    </div>

                    <div className="card p-5 border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition-colors cursor-pointer flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-500">
                            <Settings className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">{t('extra_settings')}</h3>
                            <p className="text-xs text-[var(--color-text-3)]">{t('extra_desc')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
