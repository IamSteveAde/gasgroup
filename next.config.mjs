/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: process.cwd(), // fixes root detection issue
  },
};

export default nextConfig;
