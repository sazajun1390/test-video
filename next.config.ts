import type { NextConfig } from "next";

const repo = process.env.REPO_NAME || '';
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
