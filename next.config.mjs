/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: {
    position: 'top-right',
  },
  experimental: {
    viewTransition: true,
  },
}

export default nextConfig
