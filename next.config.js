/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['imageio.forbes.com', 'www.xrtoday.com'],
  },
  env: {
    myServerUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    myAppId: process.env.NEXT_PUBLIC_APP_ID,
  },
}
