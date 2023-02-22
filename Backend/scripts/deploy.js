const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const metaDataURL = "ipfs://QmRtpnD57yoedF2Br95xBZb3WKnZKnMZRX9uD89cuWTh7J";
  // Deploy the FakeNFTMarketplace contract first
  const SaveTiger = await ethers.getContractFactory("saveTiger");
  const saveTigers = await SaveTiger.deploy(metaDataURL);
  await saveTigers.deployed();
  console.log("save Tiger deployed to: ", saveTigers.address);

  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
