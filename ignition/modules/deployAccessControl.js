const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("AccessModule", (m) => {
    const c = m.contract("AccessControlSegregator",
        [
            ["0x80ae1c28", "0x9e84dd0b"], // 一组函数签名: 每一项为函数的keccak256签名取前4字节
            ["0xcCE8B4bc59Ff275fC232b59fF154742dA9ab4E82", "0xcCE8B4bc59Ff275fC232b59fF154742dA9ab4E82"] // 一组地址
            // 函数签名数组的长度和地址数组长度必须相等，即为每个地址对应一个函数签名
        ],
        {});

    return { c };
});
