'use client';

import { useTranslations } from 'next-intl';

const services = [
    {
        key: 'xray',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <rect x="10" y="10" width="30" height="30" rx="3" fill="currentColor" />
                <rect x="15" y="15" width="20" height="15" fill="white" />
                <circle cx="25" cy="35" r="5" fill="white" />
            </svg>
        ),
    },
    {
        key: 'ct',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <circle cx="25" cy="25" r="20" fill="currentColor" />
                <ellipse cx="25" cy="25" rx="15" ry="10" fill="white" />
            </svg>
        ),
    },
    {
        key: 'mri',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <rect x="15" y="5" width="20" height="40" rx="3" fill="currentColor" />
                <ellipse cx="25" cy="15" rx="10" ry="5" fill="white" />
                <ellipse cx="25" cy="35" rx="10" ry="5" fill="white" />
            </svg>
        ),
    },
    {
        key: 'ultrasound',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <circle cx="25" cy="25" r="20" fill="currentColor" />
                <path d="M15 25 L20 30 L35 15" stroke="white" strokeWidth="4" fill="none" />
            </svg>
        ),
    },
    {
        key: 'ecg',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <rect x="10" y="20" width="30" height="15" rx="2" fill="currentColor" />
                <rect x="12" y="22" width="26" height="11" fill="white" />
            </svg>
        ),
    },
    {
        key: 'pathology',
        icon: (
            <svg width="36" height="36" viewBox="0 0 50 50" className="text-white">
                <circle cx="25" cy="25" r="18" fill="currentColor" />
                <circle cx="25" cy="25" r="8" fill="white" />
                <circle cx="25" cy="25" r="3" fill="currentColor" />
            </svg>
        ),
    },
];

export default function ServicesSection() {
    const t = useTranslations('services');

    return (
        <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                        {t('badge')}
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t('title')}</h2>
                    <p className="text-lg text-gray-600">{t('description')}</p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.key} className="service-card card-hover bg-white rounded-3xl p-8 shadow-lg group">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{t(`${service.key}.title`)}</h3>
                            <p className="text-gray-600 mb-4">{t(`${service.key}.description`)}</p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                            >
                                {t('bookNow')}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
