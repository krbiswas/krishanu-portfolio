import type { NextConfig } from "next";

// GitHub Pages serves this repo at /krishanu-portfolio/, not at the domain root,
// so every route and asset needs that prefix baked in at build time.
const basePath = "/krishanu-portfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
