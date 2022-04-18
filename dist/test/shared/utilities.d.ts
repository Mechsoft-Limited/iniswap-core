import { Contract } from 'ethers';
import { Web3Provider } from 'ethers/providers';
import { BigNumber } from 'ethers/utils';
export declare function expandTo18Decimals(n: number): BigNumber;
export declare function getCreate2Address(factoryAddress: string, [tokenA, tokenB]: [string, string], bytecode: string): string;
export declare function getApprovalDigest(token: Contract, approve: {
    owner: string;
    spender: string;
    value: BigNumber;
}, nonce: BigNumber, deadline: BigNumber): Promise<string>;
export declare function mineBlock(provider: Web3Provider, timestamp: number): Promise<void>;
export declare function encodePrice(reserve0: BigNumber, reserve1: BigNumber): BigNumber[];
