import { Contract, Wallet } from 'ethers';
import { Web3Provider } from 'ethers/providers';
interface FactoryFixture {
    factory: Contract;
}
export declare function factoryFixture(_: Web3Provider, [wallet]: Wallet[]): Promise<FactoryFixture>;
interface PairFixture extends FactoryFixture {
    token0: Contract;
    token1: Contract;
    pair: Contract;
}
export declare function pairFixture(provider: Web3Provider, [wallet]: Wallet[]): Promise<PairFixture>;
export {};
