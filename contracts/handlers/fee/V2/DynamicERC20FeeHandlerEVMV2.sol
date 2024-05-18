// The Licensed Work is (c) 2022 Sygma
// SPDX-License-Identifier: LGPL-3.0-only
pragma solidity 0.8.11;

import "./DynamicFeeHandlerV2.sol";

/**
    @title Handles deposit fees based on the destination chain's native coin price provided by Twap oracle.
    @author ChainSafe Systems.
    @notice This contract is intended to be used with the Bridge contract.
 */
contract DynamicERC20FeeHandlerEVMV2 is DynamicFeeHandlerV2 {

    /**
        @param bridgeAddress Contract address of previously deployed Bridge.
        @param feeHandlerRouterAddress Contract address of previously deployed FeeHandlerRouter.
     */
    constructor(address bridgeAddress, address feeHandlerRouterAddress) DynamicFeeHandlerV2(bridgeAddress, feeHandlerRouterAddress) {
    }

     /**
        @notice Calculates fee for transaction cost.
        @param destinationDomainID ID of chain deposit will be bridged to.
        @return fee Returns the fee amount.
        @return tokenAddress Returns the address of the token to be used for fee.
     */
    function _calculateFee(address, uint8, uint8 destinationDomainID, bytes32, bytes calldata, bytes calldata) internal view override returns (uint256 fee, address tokenAddress) {
        address desintationCoin = destinationNativeCoinWrap[destinationDomainID];
        uint256 txCost = destinationGasPrice[destinationDomainID] * _gasUsed * twapOracle.getPrice(desintationCoin) / 1e18;
        return (txCost, address(0));
    }
}
