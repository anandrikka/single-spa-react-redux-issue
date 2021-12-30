module.exports = {
  'coverageDirectory': '<rootDir>/coverage',
  'collectCoverageFrom': [
    '<rootDir>/src/**/*.{js,jsx,ts,tsx}'
  ],
  'coverageReporters': [
    'lcov'
  ],
  'globals': {
    'ENV': {
      'AUTH_URL': '---authUrl--',
      'BASE_DOMAIN': '--baseDomain--',
      'BASE_PATH': '/--basePath--',
      'EXPERIMENTAL_FEATURES': []
    }
  },
  'testPathIgnorePatterns': [
    '<rootDir>/src/config'
  ],
  'transform': {
    '^.+\\.(j|t)sx?$': 'ts-jest',
    '.+\\.(css|scss)$': 'jest-css-modules-transform'
  },
  'moduleFileExtensions': [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
    'css',
    'json'
  ],
  'moduleNameMapper': {
    '^_$': 'lodash',
    '^.*\\.s?css': 'identity-obj-proxy',
    '^components/(.*)$': '<rootDir>/src/js/components/$1',
    '^config/(.*)$': '<rootDir>/src/config/$1',
    '^hooks/(.*)$': '<rootDir>/src/js/hooks/$1',
    '^interfaces/(.*)$': '<rootDir>/src/js/interfaces/$1',
    '^app/(.*)$': '<rootDir>/src/js/components/app/$1',
    '^js/(.*)$': '<rootDir>/src/js/$1',
    '^services/(.*)$': '<rootDir>/src/js/services/$1',
    '^svg/(.*)$': '<rootDir>/src/js/components/svg/$1',
    '^test/(.*)$': '<rootDir>/test/$1'
  },
  'testURL': 'https://fake.domain.com/test.html',

  // Setup Enzyme
  'snapshotSerializers': ['enzyme-to-json/serializer'],
  'setupFilesAfterEnv': ['<rootDir>/test/helpers/setup.js']
};
