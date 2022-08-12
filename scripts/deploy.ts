import {ethers} from "hardhat";

async function main() {
  const { ethers } = require("hardhat");

  async function main() {
    const Vault = await ethers.getContractFactory(
      "Vault"
    );
    const vault = await Vault.deploy();
    await vault.deployed();
  
    console.log("Vault deployed to: ", vault.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
