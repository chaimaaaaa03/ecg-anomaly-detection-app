/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Proxy to Flask API
      },
    ];
  },
};

module.exports = nextConfig;