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
    config.resolve.alias = {
      ...config.resolve.alias,
      "@config": path.resolve(process.cwd(), "config"),
      "@components": path.resolve(process.cwd(), "components"),
    };
    return config;
  },
};

export default nextConfig;
