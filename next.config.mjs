/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/time-tracker' : '',
    assetPrefix: isProd ? '/time-tracker/' : '',
};

export default nextConfig;
