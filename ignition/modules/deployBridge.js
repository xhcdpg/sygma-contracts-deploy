const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BridgeModule", (m) => {
    const lock = m.contract("Bridge",
        [1,"0x9f47daF2343f4329e109dEa0a19E546dD3f2f243"], {});

    return { lock };
});