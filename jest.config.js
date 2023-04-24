/*eslint no-undef: "error"*/
module.exports = {
  transform: {
    '^.+\.ts?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\.|/)(test|spec))\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
