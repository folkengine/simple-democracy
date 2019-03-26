require('dotenv').config();
const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  contracts_build_directory: path.join(__dirname, 'app/src/contracts'),
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`
        ),
      network_id: 4, // Rinkeby's id
      gas: 5500000
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000
    }
  }
};
