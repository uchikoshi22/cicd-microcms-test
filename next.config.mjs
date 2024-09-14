/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    SERVICE_ID: process.env.PUBLIC_MICROCMS_SERVICE_ID,
    API_KEY: process.env.API_KEY,
    PUBLIC_SITE_URL: process.env.PUBLIC_SITE_URL,
  },
};

export default nextConfig;
