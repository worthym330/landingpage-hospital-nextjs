import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['hi', 'en', 'mr'],

    // Used when no locale matches
    defaultLocale: 'hi'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(hi|mr|en)/:path*']
};
