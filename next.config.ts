// next.config.ts
import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "#site/content": path.resolve(__dirname, ".velite/content"),
    };
    return config;
  },
};

export default nextConfig;
