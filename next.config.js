/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "lt"],
    defaultLocale: "en",
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
};
