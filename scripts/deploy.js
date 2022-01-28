
const hre = require("hardhat");

async function main() {
  

 
  const Mood = await hre.ethers.getContractFactory("MoodDiary");
  const mood = await Mood.deploy();

  await mood.deployed();

  console.log("Mood deployed to:", mood.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
