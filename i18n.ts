import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ requestLocale }) => {
    // Await the locale
    let locale = await requestLocale;

    // Ensure that the incoming locale is valid
    if (!locale || !['hi', 'en', 'mr'].includes(locale)) {
        notFound();
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
