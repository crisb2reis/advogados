import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/advogados',
  assetPrefix: '/advogados',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
