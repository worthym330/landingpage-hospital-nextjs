'use client';

import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const t = useTranslations('about');

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/10 rounded-3xl" />
                        <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-accent/10 rounded-3xl" />
                        <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-3xl p-12 shadow-2xl">
                            <svg viewBox="0 0 300 300" className="w-full">
                                <rect x="50" y="40" width="200" height="220" rx="15" fill="white" opacity="0.95" />
                                <rect x="70" y="60" width="160" height="100" rx="10" fill="#8B2635" opacity="0.2" />
                                <circle cx="150" cy="110" r="40" fill="#8B2635" opacity="0.3" />
                                <rect x="90" y="180" width="120" height="50" rx="8" fill="white" />
                                <text
                                    x="150"
                                    y="215"
                                    textAnchor="middle"
                                    fill="#8B2635"
                                    fontSize="28"
                                    fontWeight="bold"
                                    fontFamily="serif"
                                >
                                    MIC
                                </text>
                            </svg>
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 animate-float">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">100%</div>
                                    <div className="text-sm text-gray-600">{t('accuracyRate')}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                            {t('badge')}
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900">{t('title')}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{t('description1')}</p>
                        <p className="text-lg text-gray-600 leading-relaxed">{t('description2')}</p>

                        {/* Features */}
                        <div className="grid sm:grid-cols-3 gap-6 pt-6">
                            <div className="text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900">{t('expertTeam')}</h4>
                                <p className="text-sm text-gray-600 mt-1">{t('expertTeamDesc')}</p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900">{t('modernEquipment')}</h4>
                                <p className="text-sm text-gray-600 mt-1">{t('modernEquipmentDesc')}</p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-900">{t('quickReports')}</h4>
                                <p className="text-sm text-gray-600 mt-1">{t('quickReportsDesc')}</p>
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            {t('learnMore')}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
