/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // distDir: "build",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  
}

module.exports = nextConfig;
