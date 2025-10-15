import '@testing-library/jest-dom';
import { tests, codeString } from '../U4/U4EJ1.js';
describe("tests", () => {
  const JSData = tests();
  const myCodeString = codeString();
  function getJSData() {
    return new Promise((resolve, reject) => {
      JSData.then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  test('checks the function JSData returns JavaScript information from wikipedia', () => {
    let myTest;
    getJSData().then((data) => {
      myTest=data;
      expect(myCodeString.indexOf("await")).toBe(-1);
      expect(myCodeString.indexOf("json")).toBeGreaterThan(-1);
      expect(myCodeString.indexOf("then")).toBeGreaterThan(-1);
      expect(myTest.indexOf('JavaScript')).toBeGreaterThan(-1);
    }).catch((error) => {
      myTest="error";
      expect(myTest=="error").toBe(false);
    });
  });
});
