module.exports = {
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js', 'json', 'tsx'],
    transform: { '^.+\\.(ts)x?$': 'ts-jest' },
    testPathIgnorePatterns: ['/__utils__/', '__fixtures__'],
};
