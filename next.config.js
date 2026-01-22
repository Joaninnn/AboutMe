/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    // Оптимизация изображений
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Оптимизация для продакшна
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Настройки для Vercel
    poweredByHeader: false,
    
    // Сжатие
    compress: true,

    // Настройки Sass
    sassOptions: {
        api: 'modern-compiler',
        silenceDeprecations: ['legacy-js-api'],
    },
};

module.exports = nextConfig;
