import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import type { Metadata } from 'next';

export function generateStaticParams() {
    return [{ locale: 'hi' }, { locale: 'en' }, { locale: 'mr' }];
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'hero' });

    const titles = {
        hi: 'मनमोहन इमेजिंग सेंटर - उन्नत चिकित्सा इमेजिंग सेवाएं | नल्लासोपारा',
        en: 'Manmohan Imaging Center - Advanced Medical Imaging Services | Nallasopara',
        mr: 'मनमोहन इमेजिंग सेंटर - प्रगत वैद्यकीय इमेजिंग सेवा | नल्लासोपारा'
    };

    const descriptions = {
        hi: 'नल्लासोपारा में NABL मान्यता प्राप्त डायग्नोस्टिक सेंटर। डिजिटल एक्स-रे, सीटी स्कैन, एमआरआई, अल्ट्रासाउंड, ईसीजी और पैथोलॉजी सेवाएं। 2009 से विश्वसनीय स्वास्थ्य सेवा। 24/7 उपलब्ध।',
        en: 'NABL accredited diagnostic center in Nallasopara. Digital X-Ray, CT Scan, MRI, Ultrasound, ECG & Pathology services. Trusted healthcare since 2009. Available 24/7.',
        mr: 'नल्लासोपारा मधील NABL मान्यताप्राप्त निदान केंद्र. डिजिटल एक्स-रे, सीटी स्कॅन, एमआरआय, अल्ट्रासाऊंड, ईसीजी आणि पॅथॉलॉजी सेवा. 2009 पासून विश्वासू आरोग्य सेवा. 24/7 उपलब्ध.'
    };

    const keywords = {
        hi: 'मनमोहन इमेजिंग सेंटर, नल्लासोपारा डायग्नोस्टिक सेंटर, एक्स-रे नल्लासोपारा, सीटी स्कैन नल्लासोपारा, एमआरआई नल्लासोपारा, अल्ट्रासाउंड नल्लासोपारा, ईसीजी नल्लासोपारा, पैथोलॉजी लैब नल्लासोपारा, NABL मान्यता प्राप्त लैब, वसई विरार डायग्नोस्टिक',
        en: 'Manmohan Imaging Center, Nallasopara diagnostic center, X-Ray Nallasopara, CT Scan Nallasopara, MRI Nallasopara, Ultrasound Nallasopara, ECG Nallasopara, Pathology Lab Nallasopara, NABL accredited lab, Vasai Virar diagnostic',
        mr: 'मनमोहन इमेजिंग सेंटर, नल्लासोपारा निदान केंद्र, एक्स-रे नल्लासोपारा, सीटी स्कॅन नल्लासोपारा, एमआरआय नल्लासोपारा, अल्ट्रासाऊंड नल्लासोपारा, ईसीजी नल्लासोपारा, पॅथॉलॉजी प्रयोगशाळा नल्लासोपारा, NABL मान्यताप्राप्त प्रयोगशाळा, वसई विरार निदान'
    };

    const currentLocale = locale as 'hi' | 'en' | 'mr';
    const title = titles[currentLocale];
    const description = descriptions[currentLocale];
    const keywordList = keywords[currentLocale];

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manmohanimaging.com';

    return {
        title,
        description,
        keywords: keywordList,
        authors: [{ name: 'Manmohan Imaging Center' }],
        creator: 'Manmohan Imaging Center',
        publisher: 'Manmohan Imaging Center',
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        metadataBase: new URL(baseUrl),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'hi': '/hi',
                'en': '/en',
                'mr': '/mr',
            },
        },
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${locale}`,
            siteName: 'Manmohan Imaging Center',
            locale: locale === 'hi' ? 'hi_IN' : locale === 'mr' ? 'mr_IN' : 'en_IN',
            type: 'website',
            images: [
                {
                    url: `${baseUrl}/og-image.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Manmohan Imaging Center - Advanced Medical Imaging',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${baseUrl}/og-image.jpg`],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        verification: {
            google: 'your-google-verification-code', // Replace with actual code
            // yandex: 'your-yandex-verification-code',
            // bing: 'your-bing-verification-code',
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!['en', 'hi', 'mr'].includes(locale)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);

    const messages = await getMessages();

    // Structured Data (JSON-LD) for SEO
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'MedicalBusiness',
        '@id': 'https://manmohanimaging.com',
        name: 'Manmohan Imaging Center',
        image: 'https://manmohanimaging.com/logo.jpg',
        description: 'NABL accredited diagnostic imaging center providing X-Ray, CT Scan, MRI, Ultrasound, ECG and Pathology services in Nallasopara',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Sharda Apt., Gaurai Pada Naka, Santosh Bhavan',
            addressLocality: 'Nallasopara (East)',
            addressRegion: 'Maharashtra',
            postalCode: '401209',
            addressCountry: 'IN'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.4229,
            longitude: 72.8236
        },
        url: 'https://manmohanimaging.com',
        telephone: '+91-87799 55226', // Replace with actual phone
        priceRange: '$$',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                opens: '09:00',
                closes: '20:00'
            }
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500'
        },
        medicalSpecialty: [
            'Radiology',
            'Diagnostic Imaging',
            'Pathology'
        ],
        availableService: [
            {
                '@type': 'MedicalTest',
                name: 'Digital X-Ray'
            },
            {
                '@type': 'MedicalTest',
                name: 'CT Scan'
            },
            {
                '@type': 'MedicalTest',
                name: 'MRI'
            },
            {
                '@type': 'MedicalTest',
                name: 'Ultrasound'
            },
            {
                '@type': 'MedicalTest',
                name: 'ECG'
            },
            {
                '@type': 'MedicalTest',
                name: 'Pathology Lab Tests'
            }
        ]
    };

    return (
        <html lang={locale}>
            <head>
                {/* Viewport for responsive design */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                {/* Theme Color */}
                <meta name="theme-color" content="#8B2635" />
            </head>
            <body className="font-sans text-gray-800 overflow-x-hidden">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
