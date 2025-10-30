/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/karavan-timeline' : '',
  assetPrefix: isProd ? '/karavan-timeline/' : '',
  reactCompiler: true,
};

export default nextConfig;
