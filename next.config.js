/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
      'localhost',
    ],
  },
  compiler: {
    styledComponents: true,
    removeConsole: {
      exclude: ['error'],
    },
  },
};

module.exports = nextConfig;