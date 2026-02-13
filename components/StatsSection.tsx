'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
    const t = useTranslations('stats');
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateCounters();
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    };

    return (
        <section ref={sectionRef} className="py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center group">
                        <div className="text-5xl md:text-6xl font-bold text-primary counter" data-target="15">
                            0
                        </div>
                        <div className="text-lg text-gray-600 mt-2">{t('yearsExperience')}</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-5xl md:text-6xl font-bold text-primary counter" data-target="50000">
                            0
                        </div>
                        <div className="text-lg text-gray-600 mt-2">{t('happyPatients')}</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-5xl md:text-6xl font-bold text-primary counter" data-target="12">
                            0
                        </div>
                        <div className="text-lg text-gray-600 mt-2">{t('expertDoctors')}</div>
                    </div>
                    <div className="text-center group">
                        <div className="text-5xl md:text-6xl font-bold text-primary counter" data-target="100">
                            0
                        </div>
                        <div className="text-lg text-gray-600 mt-2">{t('accuracy')}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
