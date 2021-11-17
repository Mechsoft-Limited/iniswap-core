const Factory = artifacts.require("IniFactory");
const SafeMath = artifacts.require("SafeMath")
const UQ112x112 = artifacts.require("UQ112x112")
const Pair = artifacts.require("IniPair")

const fs = require('fs');
const path = require('path');
module.exports= async function(deployer,network,accounts){
  await deployer.deploy(SafeMath);
  await deployer.deploy(UQ112x112);
  await deployer.link(SafeMath,[Factory])
  await deployer.link(UQ112x112,[Factory])
  
  await deployer.deploy(Factory,accounts[0]);
const factory = await Factory.deployed();
  fs.writeFileSync(path.join(__dirname,"../address.txt"),factory.address);
// if(network === "development")
// {
//   const weth = fs.readFileSync(path.join(__dirname,'../../weth/address.txt'),'utf8');
//   const token1 = fs.readFileSync(path.join(__dirname,'../../tokens/address1.txt'),'utf8');
//   const token2 = fs.readFileSync(path.join(__dirname,'../../tokens/address2.txt'),'utf8');
//  const token1Token2= await factory.createPair(token1,token2);
//  const wethToken1 =  await factory.createPair(weth,token1);
//  const wethToken2 = await factory.createPair(weth,token2);
//  //console.log(wethToken1);
//  const pairs = `
// Token1/Token2: ${token1Token2.receipt.to}
// WETH/Token1: ${wethToken1.receipt.to}
// WETH/Token2: ${wethToken2.receipt.to}
//  `
//  fs.writeFileSync(path.join(__dirname,"../pairs.txt"),pairs);

// }


}