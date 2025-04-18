module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(react-router-dom)/)'
  ],
  testEnvironment: 'jsdom',
};