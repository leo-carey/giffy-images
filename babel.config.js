module.exports = {
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import"
    ],
    presets: ["@babel/preset-env"],
    env: {
      development: {
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import"
        ],
        presets: ["@babel/preset-env"]
      },
      test: {
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import"
        ],
        presets: ["@babel/preset-env"]
      },
      production: {
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-syntax-dynamic-import"
        ],
        presets: ["@babel/preset-env"]
      }
    }
  };