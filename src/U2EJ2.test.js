import '@testing-library/jest-dom';
import { tests, codeString } from '../U2/U2EJ2.js';
describe("tests", () => {
  const fetchOctocat = tests();
  const myCodeString = codeString();
  test('checks the function fetchOctocat returns user octocat information from GitHub', async () => {
    const myTest = await fetchOctocat;
    expect(myCodeString.indexOf("await")).toBeGreaterThan(-1);
    expect(myCodeString.indexOf("json")).toBeGreaterThan(-1);
    expect(myCodeString.indexOf("then")).toBe(-1);
    expect(typeof(myTest)).toBe('object');
    expect(myTest.login).toBe('octocat');
  });
});
