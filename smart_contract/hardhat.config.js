require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/vD21JBCNyvbdwFYpsSJcPl6hu663pmyE',
      accounts: ['db9991c4a2089195a34604567bbecf580187cb7b418ea06240da83ada0db8153'],
    },
  },
};