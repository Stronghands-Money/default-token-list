const { version } = require("../package.json");
const mainnet = require("./tokens/mainnet.json");
const testnet = require("./tokens/testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Stronghands Money List",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[1],
      minor: +parsed[3],
      patch: +parsed[6],
    },
    tags: {},
    logoURI: "ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir",
    keywords: ["stronghands", "default"],
    tokens: [...mainnet, ...testnet]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
