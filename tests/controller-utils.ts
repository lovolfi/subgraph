import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  BurnShort,
  DepositCollateral,
  FeeRateUpdated,
  FeeRecipientUpdated,
  Liquidate,
  MintShort,
  NormalizationFactorUpdated,
  OpenVault,
  OwnershipTransferred,
  RedeemLong,
  RedemptionDiscountUpdated,
  UpdateOperator,
  WithdrawCollateral
} from "../generated/Controller/Controller"

export function createBurnShortEvent(
  sender: Address,
  amount: BigInt,
  vaultId: BigInt
): BurnShort {
  let burnShortEvent = changetype<BurnShort>(newMockEvent())

  burnShortEvent.parameters = new Array()

  burnShortEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  burnShortEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  burnShortEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )

  return burnShortEvent
}

export function createDepositCollateralEvent(
  sender: Address,
  vaultId: BigInt,
  amount: BigInt
): DepositCollateral {
  let depositCollateralEvent = changetype<DepositCollateral>(newMockEvent())

  depositCollateralEvent.parameters = new Array()

  depositCollateralEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  depositCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositCollateralEvent
}

export function createFeeRateUpdatedEvent(
  oldFee: BigInt,
  newFee: BigInt
): FeeRateUpdated {
  let feeRateUpdatedEvent = changetype<FeeRateUpdated>(newMockEvent())

  feeRateUpdatedEvent.parameters = new Array()

  feeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldFee", ethereum.Value.fromUnsignedBigInt(oldFee))
  )
  feeRateUpdatedEvent.parameters.push(
    new ethereum.EventParam("newFee", ethereum.Value.fromUnsignedBigInt(newFee))
  )

  return feeRateUpdatedEvent
}

export function createFeeRecipientUpdatedEvent(
  oldFeeRecipient: Address,
  newFeeRecipient: Address
): FeeRecipientUpdated {
  let feeRecipientUpdatedEvent = changetype<FeeRecipientUpdated>(newMockEvent())

  feeRecipientUpdatedEvent.parameters = new Array()

  feeRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldFeeRecipient",
      ethereum.Value.fromAddress(oldFeeRecipient)
    )
  )
  feeRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeRecipient",
      ethereum.Value.fromAddress(newFeeRecipient)
    )
  )

  return feeRecipientUpdatedEvent
}

export function createLiquidateEvent(
  liquidator: Address,
  vaultId: BigInt,
  debtAmount: BigInt,
  collateralPaid: BigInt
): Liquidate {
  let liquidateEvent = changetype<Liquidate>(newMockEvent())

  liquidateEvent.parameters = new Array()

  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "debtAmount",
      ethereum.Value.fromUnsignedBigInt(debtAmount)
    )
  )
  liquidateEvent.parameters.push(
    new ethereum.EventParam(
      "collateralPaid",
      ethereum.Value.fromUnsignedBigInt(collateralPaid)
    )
  )

  return liquidateEvent
}

export function createMintShortEvent(
  sender: Address,
  amount: BigInt,
  vaultId: BigInt
): MintShort {
  let mintShortEvent = changetype<MintShort>(newMockEvent())

  mintShortEvent.parameters = new Array()

  mintShortEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  mintShortEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  mintShortEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )

  return mintShortEvent
}

export function createNormalizationFactorUpdatedEvent(
  oldNF: BigInt,
  newNF: BigInt,
  lastModifiedTimestamp: BigInt,
  timestamp: BigInt
): NormalizationFactorUpdated {
  let normalizationFactorUpdatedEvent = changetype<NormalizationFactorUpdated>(
    newMockEvent()
  )

  normalizationFactorUpdatedEvent.parameters = new Array()

  normalizationFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldNF", ethereum.Value.fromUnsignedBigInt(oldNF))
  )
  normalizationFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam("newNF", ethereum.Value.fromUnsignedBigInt(newNF))
  )
  normalizationFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "lastModifiedTimestamp",
      ethereum.Value.fromUnsignedBigInt(lastModifiedTimestamp)
    )
  )
  normalizationFactorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return normalizationFactorUpdatedEvent
}

export function createOpenVaultEvent(
  sender: Address,
  vaultId: BigInt
): OpenVault {
  let openVaultEvent = changetype<OpenVault>(newMockEvent())

  openVaultEvent.parameters = new Array()

  openVaultEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  openVaultEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )

  return openVaultEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRedeemLongEvent(
  redeemer: Address,
  vaultId: BigInt,
  wPowerPerpAmount: BigInt,
  payoutAmount: BigInt
): RedeemLong {
  let redeemLongEvent = changetype<RedeemLong>(newMockEvent())

  redeemLongEvent.parameters = new Array()

  redeemLongEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  redeemLongEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  redeemLongEvent.parameters.push(
    new ethereum.EventParam(
      "wPowerPerpAmount",
      ethereum.Value.fromUnsignedBigInt(wPowerPerpAmount)
    )
  )
  redeemLongEvent.parameters.push(
    new ethereum.EventParam(
      "payoutAmount",
      ethereum.Value.fromUnsignedBigInt(payoutAmount)
    )
  )

  return redeemLongEvent
}

export function createRedemptionDiscountUpdatedEvent(
  vaultId: BigInt,
  redemptionDiscount: BigInt
): RedemptionDiscountUpdated {
  let redemptionDiscountUpdatedEvent = changetype<RedemptionDiscountUpdated>(
    newMockEvent()
  )

  redemptionDiscountUpdatedEvent.parameters = new Array()

  redemptionDiscountUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  redemptionDiscountUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "redemptionDiscount",
      ethereum.Value.fromUnsignedBigInt(redemptionDiscount)
    )
  )

  return redemptionDiscountUpdatedEvent
}

export function createUpdateOperatorEvent(
  sender: Address,
  vaultId: BigInt,
  operator: Address
): UpdateOperator {
  let updateOperatorEvent = changetype<UpdateOperator>(newMockEvent())

  updateOperatorEvent.parameters = new Array()

  updateOperatorEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  updateOperatorEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  updateOperatorEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )

  return updateOperatorEvent
}

export function createWithdrawCollateralEvent(
  sender: Address,
  vaultId: BigInt,
  amount: BigInt
): WithdrawCollateral {
  let withdrawCollateralEvent = changetype<WithdrawCollateral>(newMockEvent())

  withdrawCollateralEvent.parameters = new Array()

  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam(
      "vaultId",
      ethereum.Value.fromUnsignedBigInt(vaultId)
    )
  )
  withdrawCollateralEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawCollateralEvent
}
