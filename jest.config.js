module.exports = {
  testEnvironment: "jest-environment-jsdom",
  snapshotSerializers: [
    "@emotion/jest/serializer" /* if needed other snapshotSerializers should go here */,
  ],
};
