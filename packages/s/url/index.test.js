const app = require("./index");

describe("Validates Response when URL Shortner is Requested", () => {
  test("Validates Response URL shortner for Positive flow", async () => {
    var requestBody = {
      actual_url:
        "https://nimbella.com/blog/how-to-deploy-node-js-functions-on-nimbella",
    };
    var appResponse = await app.main(requestBody);
    expect(appResponse.body.success).toBe(true);
  });
});
