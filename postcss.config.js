const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    "tailwindcss",
    ...(process.env.NODE_ENV === "production"
      ? [
          purgecss({
            content: [
              "./pages/**/*.{ts,tsx,js,jsx}",
              "./components/**/*.{ts,tsx,js,jsx}"
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          })
        ]
      : []),
    "postcss-preset-env"
    // require("autoprefixer")
  ]
};
