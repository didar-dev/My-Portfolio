/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        // Apply a Content-Security-Policy header to all pages
        source: "/",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; connect-src 'self';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
