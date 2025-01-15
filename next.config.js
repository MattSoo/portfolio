/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
