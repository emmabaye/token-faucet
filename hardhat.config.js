require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  paths: {
    artifacts: './src/artifacts',
  },

  networks: {
    hardhat: {
      chainId: 1337
    },
    goreli: {
      url: "https://goerli.infura.io/v3/78d89d20d22e46f693e73fb67cf4ce78",
      accounts: [`0x${process.env.PRIVATE_KEY}`]

    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/78d89d20d22e46f693e73fb67cf4ce78",
      accounts: [`0x${process.env.PRIVATE_KEY}`] // Private key of account contract is deployed with
    }
  },
  solidity: "0.8.3"
};

