/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/time-tracker' : '',
    assetPrefix: isProd ? '/time-tracker/' : '',
    trailingSlash: true,
};

export default nextConfig;
