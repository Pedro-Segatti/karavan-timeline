/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/karavan-timeline',
  assetPrefix: '/karavan-timeline/',
  reactCompiler: true,
};

export default nextConfig;
