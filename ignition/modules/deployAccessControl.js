const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("AccessModule", (m) => {
    const c = m.contract("AccessControlSegregator",
        [["0x80ae1c28"],["0xcCE8B4bc59Ff275fC232b59fF154742dA9ab4E82"]], {});

    return { c };
});