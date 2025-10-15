import '@testing-library/jest-dom';
import { tests, codeString } from '../U4/U4EJ2.js';
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
  test('checks the function fetchOctocat returns user octocat information from GitHub', () => {
    let myTest;
    getJSData().then((data) => {
      myTest=data;
      expect(myCodeString.indexOf("await")).toBe(-1);
      expect(myCodeString.indexOf("json")).toBeGreaterThan(-1);
      expect(myCodeString.indexOf("then")).toBeGreaterThan(-1);
      expect(typeof(myTest)).toBe('object');
      expect(myTest.login).toBe('octocat');
    }).catch((error) => {
      myTest="error";
      expect(myTest=="error").toBe(false);
    });
  });
});
