/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CheckIftokenERC721,
  CheckIftokenERC721Interface,
} from "../../../contracts/MainContract.sol/CheckIftokenERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_testSubject",
        type: "address",
      },
    ],
    name: "check",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "res",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610366806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636f10e2851461003b578063c23697a814610059575b600080fd5b610043610075565b604051610050919061019d565b60405180910390f35b610073600480360381019061006e919061021b565b610088565b005b600060149054906101000a900460ff1681565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166301ffc9a76380ac58cd6040518263ffffffff1660e01b815260040161012591906102bc565b602060405180830381865afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101669190610303565b600060146101000a81548160ff02191690831515021790555050565b60008115159050919050565b61019781610182565b82525050565b60006020820190506101b2600083018461018e565b92915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101e8826101bd565b9050919050565b6101f8816101dd565b811461020357600080fd5b50565b600081359050610215816101ef565b92915050565b600060208284031215610231576102306101b8565b5b600061023f84828501610206565b91505092915050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b60008160e01b9050919050565b60006102a66102a161029c84610248565b61027e565b610252565b9050919050565b6102b68161028b565b82525050565b60006020820190506102d160008301846102ad565b92915050565b6102e081610182565b81146102eb57600080fd5b50565b6000815190506102fd816102d7565b92915050565b600060208284031215610319576103186101b8565b5b6000610327848285016102ee565b9150509291505056fea26469706673582212207c083373144991bea912d69455487251d7c7a7f3b2e3fad3acd34beb47d3396964736f6c634300080d0033";

type CheckIftokenERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CheckIftokenERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CheckIftokenERC721__factory extends ContractFactory {
  constructor(...args: CheckIftokenERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CheckIftokenERC721> {
    return super.deploy(overrides || {}) as Promise<CheckIftokenERC721>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CheckIftokenERC721 {
    return super.attach(address) as CheckIftokenERC721;
  }
  override connect(signer: Signer): CheckIftokenERC721__factory {
    return super.connect(signer) as CheckIftokenERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CheckIftokenERC721Interface {
    return new utils.Interface(_abi) as CheckIftokenERC721Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CheckIftokenERC721 {
    return new Contract(address, _abi, signerOrProvider) as CheckIftokenERC721;
  }
}
