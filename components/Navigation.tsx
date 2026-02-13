'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Navigation() {
    const t = useTranslations('nav');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass shadow-lg' : ''
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-4 animate-slide-down">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                            <svg width="32" height="32" viewBox="0 0 50 50" className="text-white">
                                <rect x="5" y="5" width="40" height="40" rx="5" fill="currentColor" />
                                <circle cx="25" cy="18" r="6" fill="white" />
                                <path d="M15 35 Q25 25 35 35 L35 42 Q25 48 15 42 Z" fill="white" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="font-serif text-2xl font-bold text-primary">Manmohan</h1>
                            <p className="text-xs tracking-widest font-semibold text-gray-600">IMAGING CENTER</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 animate-slide-down" style={{ animationDelay: '0.1s' }}>
                        <a href="#home" className="nav-link text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('home')}
                        </a>
                        <a href="#services" className="nav-link text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('services')}
                        </a>
                        <a href="#about" className="nav-link text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('about')}
                        </a>
                        <a href="#contact" className="nav-link text-gray-700 hover:text-primary font-medium transition-colors">
                            {t('contact')}
                        </a>
                    </div>

                    {/* Language Switcher & CTA */}
                    <div className="hidden md:flex items-center gap-4 animate-slide-down" style={{ animationDelay: '0.2s' }}>
                        <LanguageSwitcher />
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/30"
                        >
                            {t('bookNow')}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass border-t">
                    <div className="px-6 py-4 space-y-3">
                        <a href="#home" className="block py-2 text-gray-700 hover:text-primary font-medium">
                            {t('home')}
                        </a>
                        <a href="#services" className="block py-2 text-gray-700 hover:text-primary font-medium">
                            {t('services')}
                        </a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-primary font-medium">
                            {t('about')}
                        </a>
                        <a href="#contact" className="block py-2 text-gray-700 hover:text-primary font-medium">
                            {t('contact')}
                        </a>
                        <div className="pt-2">
                            <LanguageSwitcher />
                        </div>
                        <a href="#contact" className="block w-full py-3 text-center bg-primary text-white font-semibold rounded-full">
                            {t('bookNow')}
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
