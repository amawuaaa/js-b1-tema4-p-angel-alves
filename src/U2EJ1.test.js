import '@testing-library/jest-dom';
import { tests, codeString } from '../U2/U2EJ1.js';
describe("tests", () => {
  const JSData = tests();
  const myCodeString = codeString();
  test('checks the function JSData returns JavaScript information from wikipedia', async () => {
    const myTest = await JSData;
    expect(myCodeString.indexOf("await")).toBeGreaterThan(-1);
    expect(myCodeString.indexOf("json")).toBeGreaterThan(-1);
    expect(myCodeString.indexOf("then")).toBe(-1);
    expect(myTest.indexOf('JavaScript')).toBeGreaterThan(-1);
  });
});
