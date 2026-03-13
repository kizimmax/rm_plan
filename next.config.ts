import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/rm_plan',
  images: { unoptimized: true },
};

export default nextConfig;
