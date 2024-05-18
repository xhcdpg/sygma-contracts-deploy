require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.11",
  networks: {
    findora: {
      url: "https://prod-mainnet.prod.findora.org:8545",
      chainId: 2152,
      accounts: [
        "your private key in hex",
      ],
    },
  },
};
