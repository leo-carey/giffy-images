// jest.config.js
module.exports = {
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    reporters: ["default"],

    collectCoverageFrom: [
        '<rootDir>/src/*.{js,jsx}'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ogg)$': '<rootDir>/__test__/*.test.js',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    coverageReporters: ["json", "lcov", "text", "clover"],
    transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"]
};