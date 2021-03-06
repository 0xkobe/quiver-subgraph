// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SafeWithdraw extends ethereum.Event {
  get params(): SafeWithdraw__Params {
    return new SafeWithdraw__Params(this);
  }
}

export class SafeWithdraw__Params {
  _event: SafeWithdraw;

  constructor(event: SafeWithdraw) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ultisig(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VoteGovernanceAddress extends ethereum.Event {
  get params(): VoteGovernanceAddress__Params {
    return new VoteGovernanceAddress__Params(this);
  }
}

export class VoteGovernanceAddress__Params {
  _event: VoteGovernanceAddress;

  constructor(event: VoteGovernanceAddress) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get multisig(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawToGovernanceAddress extends ethereum.Event {
  get params(): WithdrawToGovernanceAddress__Params {
    return new WithdrawToGovernanceAddress__Params(this);
  }
}

export class WithdrawToGovernanceAddress__Params {
  _event: WithdrawToGovernanceAddress;

  constructor(event: WithdrawToGovernanceAddress) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get multisig(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class QNFTGov extends ethereum.SmartContract {
  static bind(address: Address): QNFTGov {
    return new QNFTGov("QNFTGov", address);
  }

  PERCENT_MAX(): BigInt {
    let result = super.call("PERCENT_MAX", "PERCENT_MAX():(uint256)", []);

    return result[0].toBigInt();
  }

  try_PERCENT_MAX(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("PERCENT_MAX", "PERCENT_MAX():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  VOTE_QUORUM(): BigInt {
    let result = super.call("VOTE_QUORUM", "VOTE_QUORUM():(uint256)", []);

    return result[0].toBigInt();
  }

  try_VOTE_QUORUM(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("VOTE_QUORUM", "VOTE_QUORUM():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  qnft(): Address {
    let result = super.call("qnft", "qnft():(address)", []);

    return result[0].toAddress();
  }

  try_qnft(): ethereum.CallResult<Address> {
    let result = super.tryCall("qnft", "qnft():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  voteAddressByVoter(param0: Address): Address {
    let result = super.call(
      "voteAddressByVoter",
      "voteAddressByVoter(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toAddress();
  }

  try_voteAddressByVoter(param0: Address): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "voteAddressByVoter",
      "voteAddressByVoter(address):(address)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  voteResult(param0: Address): BigInt {
    let result = super.call("voteResult", "voteResult(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_voteResult(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("voteResult", "voteResult(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  voteWeightsByVoter(param0: Address): BigInt {
    let result = super.call(
      "voteWeightsByVoter",
      "voteWeightsByVoter(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_voteWeightsByVoter(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "voteWeightsByVoter",
      "voteWeightsByVoter(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeWithdrawCall extends ethereum.Call {
  get inputs(): SafeWithdrawCall__Inputs {
    return new SafeWithdrawCall__Inputs(this);
  }

  get outputs(): SafeWithdrawCall__Outputs {
    return new SafeWithdrawCall__Outputs(this);
  }
}

export class SafeWithdrawCall__Inputs {
  _call: SafeWithdrawCall;

  constructor(call: SafeWithdrawCall) {
    this._call = call;
  }

  get multisig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SafeWithdrawCall__Outputs {
  _call: SafeWithdrawCall;

  constructor(call: SafeWithdrawCall) {
    this._call = call;
  }
}

export class SetQNftCall extends ethereum.Call {
  get inputs(): SetQNftCall__Inputs {
    return new SetQNftCall__Inputs(this);
  }

  get outputs(): SetQNftCall__Outputs {
    return new SetQNftCall__Outputs(this);
  }
}

export class SetQNftCall__Inputs {
  _call: SetQNftCall;

  constructor(call: SetQNftCall) {
    this._call = call;
  }

  get _qnft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetQNftCall__Outputs {
  _call: SetQNftCall;

  constructor(call: SetQNftCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateVoteAmountCall extends ethereum.Call {
  get inputs(): UpdateVoteAmountCall__Inputs {
    return new UpdateVoteAmountCall__Inputs(this);
  }

  get outputs(): UpdateVoteAmountCall__Outputs {
    return new UpdateVoteAmountCall__Outputs(this);
  }
}

export class UpdateVoteAmountCall__Inputs {
  _call: UpdateVoteAmountCall;

  constructor(call: UpdateVoteAmountCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get minusAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get plusAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateVoteAmountCall__Outputs {
  _call: UpdateVoteAmountCall;

  constructor(call: UpdateVoteAmountCall) {
    this._call = call;
  }
}

export class VoteGovernanceAddressCall extends ethereum.Call {
  get inputs(): VoteGovernanceAddressCall__Inputs {
    return new VoteGovernanceAddressCall__Inputs(this);
  }

  get outputs(): VoteGovernanceAddressCall__Outputs {
    return new VoteGovernanceAddressCall__Outputs(this);
  }
}

export class VoteGovernanceAddressCall__Inputs {
  _call: VoteGovernanceAddressCall;

  constructor(call: VoteGovernanceAddressCall) {
    this._call = call;
  }

  get multisig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class VoteGovernanceAddressCall__Outputs {
  _call: VoteGovernanceAddressCall;

  constructor(call: VoteGovernanceAddressCall) {
    this._call = call;
  }
}

export class WithdrawToGovernanceAddressCall extends ethereum.Call {
  get inputs(): WithdrawToGovernanceAddressCall__Inputs {
    return new WithdrawToGovernanceAddressCall__Inputs(this);
  }

  get outputs(): WithdrawToGovernanceAddressCall__Outputs {
    return new WithdrawToGovernanceAddressCall__Outputs(this);
  }
}

export class WithdrawToGovernanceAddressCall__Inputs {
  _call: WithdrawToGovernanceAddressCall;

  constructor(call: WithdrawToGovernanceAddressCall) {
    this._call = call;
  }

  get multisig(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WithdrawToGovernanceAddressCall__Outputs {
  _call: WithdrawToGovernanceAddressCall;

  constructor(call: WithdrawToGovernanceAddressCall) {
    this._call = call;
  }
}
