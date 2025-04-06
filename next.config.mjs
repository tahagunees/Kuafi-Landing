/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Uyarılar build'i engellemeyecek şekilde ayarlama
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['i.pravatar.cc'], // pravatar.cc içeriklerini güvenilir yapacak
    unoptimized: true, // Static export için gerekli
  },
};

export default nextConfig; 