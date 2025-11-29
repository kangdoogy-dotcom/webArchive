import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/webArchive',
  assetPrefix: '/webArchive',
};

export default nextConfig;
