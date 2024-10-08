import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [`${process.env.WALLET_PRIVATE_KEY}`]
    },
  },
  etherscan:{
    apiKey: process.env.ETHERSCAN_KEY
  }
};

export default config;
