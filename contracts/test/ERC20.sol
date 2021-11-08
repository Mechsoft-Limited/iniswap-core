pragma solidity =0.5.16;

import '../IniERC20.sol';

contract ERC20 is IniERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
