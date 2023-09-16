import IOService from '..';

describe('src/index.ts', () => {
  test('a. should return the instance type.', (done) => {
    const io = IOService.instance;
    expect(typeof io).toBe('function');
    done();
  });
});
