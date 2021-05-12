import { BigInt } from "@graphprotocol/graph-ts"
import {
  QNFTSettings,
  AddBgImages,
  AddFavCoins,
  AddImageSets,
  AddLockOption,
  OwnershipTransferred,
  RemoveBgImage,
  RemoveFavCoin,
  RemoveImageSet,
  RemoveLockOption,
  SetNonTokenPriceMultiplier,
  SetTokenPriceMultiplier
} from "../generated/QNFTSettings/QNFTSettings"
import { ExampleEntity } from "../generated/schema"

export function handleAddBgImages(event: AddBgImages): void {
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
  entity.owner = event.params.owner
  entity.dataUrls = event.params.dataUrls

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
  // - contract.ARROW_IMAGE_COUNT(...)
  // - contract.BACKGROUND_IMAGE_COUNT(...)
  // - contract.EMOTION_COUNT_PER_NFT(...)
  // - contract.PERCENT_MAX(...)
  // - contract.bgImages(...)
  // - contract.bgImagesCount(...)
  // - contract.calcMintPrice(...)
  // - contract.favCoinMintPrice(...)
  // - contract.favCoins(...)
  // - contract.favCoinsCount(...)
  // - contract.lockOptionLockDuration(...)
  // - contract.lockOptions(...)
  // - contract.lockOptionsCount(...)
  // - contract.nftImageMintPrice(...)
  // - contract.nftImages(...)
  // - contract.nftImagesCount(...)
  // - contract.nonTokenPriceMultiplier(...)
  // - contract.owner(...)
  // - contract.qnft(...)
  // - contract.qstkPrice(...)
  // - contract.tokenPriceMultiplier(...)
}

export function handleAddFavCoins(event: AddFavCoins): void {}

export function handleAddImageSets(event: AddImageSets): void {}

export function handleAddLockOption(event: AddLockOption): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRemoveBgImage(event: RemoveBgImage): void {}

export function handleRemoveFavCoin(event: RemoveFavCoin): void {}

export function handleRemoveImageSet(event: RemoveImageSet): void {}

export function handleRemoveLockOption(event: RemoveLockOption): void {}

export function handleSetNonTokenPriceMultiplier(
  event: SetNonTokenPriceMultiplier
): void {}

export function handleSetTokenPriceMultiplier(
  event: SetTokenPriceMultiplier
): void {}
