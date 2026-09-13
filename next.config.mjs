/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: process.env.NODE_ENV === 'production' ? '/EverSaath' : '',
	images: {
		unoptimized: true,
		remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
	},
};
export default nextConfig;
