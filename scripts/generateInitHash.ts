const { bytecode } = require('../build/contracts/IniPair.json')
const { keccak256 } = require('@ethersproject/solidity')
const fs = require('fs');
const path = require('path');
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`${bytecode}`]);

fs.writeFileSync(path.join(__dirname,'../src/initCodeHash.ts'), `export const INIT_CODE_HASH = '${COMPUTED_INIT_CODE_HASH}'`)

const factory = fs.readFileSync(path.join(__dirname,'../binance_address.txt'), 'utf8');
fs.writeFileSync(path.join(__dirname,'../src/factoryAddress.ts'), `export const FACTORY_ADDRESS = '${factory}'`)
