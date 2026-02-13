import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://manmohanimaging.com';
    const locales = ['hi', 'en', 'mr'];
    const currentDate = new Date();

    // Generate sitemap entries for each locale
    const localeUrls = locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: locale === 'hi' ? 1.0 : 0.9, // Hindi is primary
        alternates: {
            languages: {
                hi: `${baseUrl}/hi`,
                en: `${baseUrl}/en`,
                mr: `${baseUrl}/mr`,
            },
        },
    }));

    return [
        // Root redirect
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        // Locale-specific pages
        ...localeUrls,
    ];
}
