/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'images.ctfassets.net'], // Add both domains here
  },
}

module.exports = nextConfig;
