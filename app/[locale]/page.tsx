// import { useTranslations } from 'next-intl';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import DecorativeElements from '@/components/DecorativeElements';

export default function Home() {
    return (
        <>
            {/* Skip to main content for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded"
            >
                Skip to main content
            </a>

            <DecorativeElements />
            <Navigation />

            <main id="main-content">
                <HeroSection />
                <StatsSection />
                <ServicesSection />
                <AboutSection />
                <WhyChooseSection />
                <ContactSection />
            </main>

            <Footer />
            <WhatsAppButton />
        </>
    );
}
