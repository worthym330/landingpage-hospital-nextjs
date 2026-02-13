'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HeroSection() {
    const t = useTranslations('hero');

    return (
        <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl animate-float-delayed" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="space-y-8">
                        <div className="animate-slide-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-primary shadow-md">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                {t('badge')}
                            </span>
                        </div>

                        <h1
                            className="animate-slide-up font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                            style={{ animationDelay: '0.1s' }}
                        >
                            <span className="text-gray-900">{t('title.line1')}</span>{" "}
                            <span className="text-primary">{t('title.line2')}</span>
                            <br />
                            <span className="text-gray-900">{t('title.line3')}</span>
                        </h1>

                        <p
                            className="animate-slide-up text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl"
                            style={{ animationDelay: '0.2s' }}
                        >
                            {t('description')}
                        </p>

                        <div className="animate-slide-up flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
                            >
                                {t('bookAppointment')}
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:-translate-y-1"
                            >
                                {t('viewServices')}
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="animate-slide-up flex items-center gap-6 pt-4" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">{t('rating')}</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300" />
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">{t('nablAccredited')}</span>
                            </div>
                            <div className="w-px h-6 bg-gray-300" />
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span className="text-sm font-medium text-gray-700">{t('quickReports')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                        <div className="relative z-10">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[3rem] blur-2xl" />
                                <Image
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=600&fit=crop"
                                    alt="Advanced Medical Imaging Equipment"
                                    width={600}
                                    height={600}
                                    className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl animate-float object-cover"
                                />
                                {/* Overlay Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-gray-900">{t('certified')}</div>
                                            <div className="text-sm text-gray-600">{t('nablLab')}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* Top Right Badge */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-primary">24/7</div>
                                        <div className="text-xs text-gray-600">{t('service247')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-12 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
                </div>
            </div>
        </section>
    );
}
