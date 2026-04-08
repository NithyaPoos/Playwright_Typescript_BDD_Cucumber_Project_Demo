module.exports = {
  default: {
    require: ["steps/*.ts", "support/*.ts"],
    publishQuiet: true,
    format: ["progress"],
    paths: ["features/*.feature"],
    requireModule: ["ts-node/register"]
  }
};
