"use client";

import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function InstallPWA() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Detect iOS device since iOS doesn't support beforeinstallprompt
        const isIosDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        const isStandalone = window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone;

        if (isIosDevice && !isStandalone) {
            setIsIOS(true);
        }

        const handleBeforeInstallPrompt = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        window.addEventListener('appinstalled', () => {
            setIsInstallable(false);
            setDeferredPrompt(null);
            setIsIOS(false);
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            setIsInstallable(false);
        }
        setDeferredPrompt(null);
    };

    if (dismissed) return null;

    return (
        <AnimatePresence>
            {(isInstallable || isIOS) && (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
                >
                    <div className="bg-[var(--color-surface)] border border-[var(--color-border-strong)] shadow-2xl p-4 rounded-2xl flex items-center gap-4 max-w-sm w-full pointer-events-auto">
                        <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                            <Download className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <div className="flex-1">
                            {isIOS ? (
                                <>
                                    <p className="text-sm font-bold text-[var(--color-text)]">Ilovani o'rnatish</p>
                                    <p className="text-[10px] text-[var(--color-text-2)] leading-tight mt-0.5">
                                        Maxsus menyudan (Share) <b>"Bosh ekranga qo'shish"</b> orqali o'rnating.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm font-bold text-[var(--color-text)]">MedicAI ilovasi</p>
                                    <p className="text-[11px] text-[var(--color-text-2)] mt-0.5">Ilovani telefoningizga o'rnating</p>
                                </>
                            )}
                        </div>

                        {!isIOS && (
                            <button
                                onClick={handleInstallClick}
                                className="bg-[var(--color-accent)] text-white text-xs font-bold px-4 py-2 rounded-lg hover:brightness-110 active:scale-95 transition-all"
                            >
                                O'rnatish
                            </button>
                        )}

                        <button
                            onClick={() => setDismissed(true)}
                            className="p-1.5 text-[var(--color-text-3)] hover:text-[var(--color-text)] bg-[var(--color-surface-2)] rounded-full transition-colors absolute -top-2 -right-2 border border-[var(--color-border)] shadow-sm"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
