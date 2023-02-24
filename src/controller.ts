import {
  BurnShort as BurnShortEvent,
  DepositCollateral as DepositCollateralEvent,
  FeeRateUpdated as FeeRateUpdatedEvent,
  FeeRecipientUpdated as FeeRecipientUpdatedEvent,
  Liquidate as LiquidateEvent,
  MintShort as MintShortEvent,
  NormalizationFactorUpdated as NormalizationFactorUpdatedEvent,
  OpenVault as OpenVaultEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RedeemLong as RedeemLongEvent,
  RedemptionDiscountUpdated as RedemptionDiscountUpdatedEvent,
  UpdateOperator as UpdateOperatorEvent,
  WithdrawCollateral as WithdrawCollateralEvent
} from "../generated/Controller/Controller"
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
} from "../generated/schema"

export function handleBurnShort(event: BurnShortEvent): void {
  let entity = new BurnShort(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.vaultId = event.params.vaultId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositCollateral(event: DepositCollateralEvent): void {
  let entity = new DepositCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.vaultId = event.params.vaultId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRateUpdated(event: FeeRateUpdatedEvent): void {
  let entity = new FeeRateUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldFee = event.params.oldFee
  entity.newFee = event.params.newFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeRecipientUpdated(
  event: FeeRecipientUpdatedEvent
): void {
  let entity = new FeeRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldFeeRecipient = event.params.oldFeeRecipient
  entity.newFeeRecipient = event.params.newFeeRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidate(event: LiquidateEvent): void {
  let entity = new Liquidate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.liquidator = event.params.liquidator
  entity.vaultId = event.params.vaultId
  entity.debtAmount = event.params.debtAmount
  entity.collateralPaid = event.params.collateralPaid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintShort(event: MintShortEvent): void {
  let entity = new MintShort(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount
  entity.vaultId = event.params.vaultId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNormalizationFactorUpdated(
  event: NormalizationFactorUpdatedEvent
): void {
  let entity = new NormalizationFactorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldNF = event.params.oldNF
  entity.newNF = event.params.newNF
  entity.lastModifiedTimestamp = event.params.lastModifiedTimestamp
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOpenVault(event: OpenVaultEvent): void {
  let entity = new OpenVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.vaultId = event.params.vaultId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedeemLong(event: RedeemLongEvent): void {
  let entity = new RedeemLong(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.redeemer = event.params.redeemer
  entity.vaultId = event.params.vaultId
  entity.wPowerPerpAmount = event.params.wPowerPerpAmount
  entity.payoutAmount = event.params.payoutAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRedemptionDiscountUpdated(
  event: RedemptionDiscountUpdatedEvent
): void {
  let entity = new RedemptionDiscountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultId = event.params.vaultId
  entity.redemptionDiscount = event.params.redemptionDiscount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateOperator(event: UpdateOperatorEvent): void {
  let entity = new UpdateOperator(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.vaultId = event.params.vaultId
  entity.operator = event.params.operator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawCollateral(event: WithdrawCollateralEvent): void {
  let entity = new WithdrawCollateral(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.vaultId = event.params.vaultId
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
