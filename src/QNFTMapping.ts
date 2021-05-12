import { BigInt } from "@graphprotocol/graph-ts"
import {
  QNFT,
  AddFreeAllocation,
  Approval,
  ApprovalForAll,
  DepositQstk,
  MintNFT,
  OwnershipTransferred,
  PauseMint,
  RemoveFreeAllocation,
  SetFoundationWallet,
  SetTotalSupply,
  StartMint,
  Transfer,
  UnlockQstkFromNft,
  UnpauseMint,
  UpgradeNftBackground,
  UpgradeNftCoin,
  UpgradeNftImage,
  WithdrawQstk
} from "../generated/QNFT/QNFT"
import { ExampleEntity } from "../generated/schema"

export function handleAddFreeAllocation(event: AddFreeAllocation): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.user = event.params.user
  entity.amount = event.params.amount

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.FOUNDATION_PERCENTAGE(...)
  // - contract.MIN_VOTE_DURATION(...)
  // - contract.NFT_SALE_DURATION(...)
  // - contract.PERCENT_MAX(...)
  // - contract.SAFE_VOTE_END_DURATION(...)
  // - contract.balanceOf(...)
  // - contract.circulatingSupply(...)
  // - contract.foundationWallet(...)
  // - contract.freeAllocations(...)
  // - contract.getApproved(...)
  // - contract.isApprovedForAll(...)
  // - contract.mintFinished(...)
  // - contract.mintPaused(...)
  // - contract.mintStartTime(...)
  // - contract.mintStarted(...)
  // - contract.name(...)
  // - contract.nftData(...)
  // - contract.nftMinted(...)
  // - contract.owner(...)
  // - contract.ownerOf(...)
  // - contract.qstk(...)
  // - contract.qstkBalances(...)
  // - contract.remainingQstk(...)
  // - contract.supportsInterface(...)
  // - contract.symbol(...)
  // - contract.tokenURI(...)
  // - contract.totalAssignedQstk(...)
  // - contract.totalQstkBalance(...)
  // - contract.totalSupply(...)
  // - contract.voteStatus(...)
}

export function handleApproval(event: Approval): void {}

export function handleApprovalForAll(event: ApprovalForAll): void {}

export function handleDepositQstk(event: DepositQstk): void {}

export function handleMintNFT(event: MintNFT): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePauseMint(event: PauseMint): void {}

export function handleRemoveFreeAllocation(event: RemoveFreeAllocation): void {}

export function handleSetFoundationWallet(event: SetFoundationWallet): void {}

export function handleSetTotalSupply(event: SetTotalSupply): void {}

export function handleStartMint(event: StartMint): void {}

export function handleTransfer(event: Transfer): void {}

export function handleUnlockQstkFromNft(event: UnlockQstkFromNft): void {}

export function handleUnpauseMint(event: UnpauseMint): void {}

export function handleUpgradeNftBackground(event: UpgradeNftBackground): void {}

export function handleUpgradeNftCoin(event: UpgradeNftCoin): void {}

export function handleUpgradeNftImage(event: UpgradeNftImage): void {}

export function handleWithdrawQstk(event: WithdrawQstk): void {}
