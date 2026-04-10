module.exports = {
  default: {
    require: [
      "steps/**/*.ts",
      "support/world.ts",
      "support/hooks.ts"
    ],
    requireModule: ["ts-node/register"],
    paths: ["features/**/*.feature"],
    publishQuiet: true,
    timeout: 20000
  }
};
