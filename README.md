# Sygma Contracts Deploy

## 配置

在`hardhat.config.js`的`networks`中配置链信息

## 编译
```
cd sygma-contracts-deploy
npm install
npx hardhat compile
```

## 部署

部署代码在`ignition/modules/deployAccessControl.js`和`ignition/modules/deployBridge.js`中。

### 部署`AccessControlSegregator`

由于Bridge需要一个实现了`IAccessControlSegregator`接口的地址作为参数，即`contracts/utils/AccessControlSegregator.sol`

在sygma-contracts-deploy目录下运行如下命令：

```
npx hardhat ignition deploy ./ignition/modules/deployAccessControl.js --network findora
```

运行结果：

```
✔ Confirm deploy to network findora (2152)? … yes
Hardhat Ignition 🚀

Resuming existing deployment from ./ignition/deployments/chain-2152

Deploying [ AccessModule ]

Batch #1
  Executed AccessModule#AccessControlSegregator

[ AccessModule ] successfully deployed 🚀

Deployed Addresses

AccessModule#AccessControlSegregator - 0x9f47daF2343f4329e109dEa0a19E546dD3f2f243
```

### 部署Bridge

将上一步结果中的地址`0x9f47daF2343f4329e109dEa0a19E546dD3f2f243`作为`deployBridge.js`中的参数。

在sygma-contracts-deploy目录下运行如下命令：

```
npx hardhat ignition deploy ./ignition/modules/deployBridge.js --network findora
```

运行结果：

```
✔ Confirm deploy to network findora (2152)? … yes
Hardhat Ignition 🚀

Deploying [ BridgeModule ]

Batch #1
  Executed BridgeModule#Bridge

[ BridgeModule ] successfully deployed 🚀

Deployed Addresses

BridgeModule#Bridge - 0x931E19a34ec59255fbcc3bdD0C3F3b963321C25d
```

