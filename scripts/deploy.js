const hre = require("hardhat");

async function main() {
  const ReportFactory = await hre.ethers.getContractFactory("Report");
  
  const Report = await ReportFactory.deploy();
  await Report.deployed();
  console.log("Deployed contract address:", Report.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
