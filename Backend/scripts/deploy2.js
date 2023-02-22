const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
//const { SAVETIGER_NFT_CONTRACT_ADDRESS } = require("../constants");

const SAVETIGER_NFT_CONTRACT_ADDRESS =
  "0xa49fd4656e951903d2fd7e12f9465dd0e0271805";

async function main() {
  // Deploy the FakeNFTMarketplace contract first
  const STDAO = await ethers.getContractFactory("stDAO");
  const sTDAO = await STDAO.deploy(SAVETIGER_NFT_CONTRACT_ADDRESS);
  await sTDAO.deployed();
  console.log("STDAO deployed to: ", sTDAO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
