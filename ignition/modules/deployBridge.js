const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BridgeModule", (m) => {
    const lock = m.contract("Bridge",
        [
            1, // 自己指定的ID，而非真正的chainID 比如：findora为1，goerli为2
            "0x9f47daF2343f4329e109dEa0a19E546dD3f2f243" // AccessControl合约地址
        ],
        {});

    return { lock };
});

