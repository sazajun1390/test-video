import type { NextConfig } from "next";

const repo = process.env.REPO_NAME || '';
const isGithubPages = process.env.GITHUB_PAGES === 'true';


const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isGithubPages ? `/${repo}` : '',
  },
};

export default nextConfig;
