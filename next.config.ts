import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
    ],
  },
  webpack: (config) => {
    // Memaksa Webpack mengenali alias folder kustom Anda
    config.resolve.alias['@config'] = path.resolve(process.cwd(), 'config');
    config.resolve.alias['@components'] = path.resolve(process.cwd(), 'components');
    return config;
  },
};

export default nextConfig;
