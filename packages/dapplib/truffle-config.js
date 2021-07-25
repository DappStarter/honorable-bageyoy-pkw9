require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net proof gesture depth furnace that'; 
let testAccounts = [
"0xc7d2fbd0c49bc1e416f7253504e07705d15d844e938df7aac0d156cdd69f0fb0",
"0x60000184fc818af0c10d4ab026857b23f4414055e09016c09a7b44e14a769b77",
"0x8d7c3934166e55ca27c420b91ad9d1abbf34b2c3d4815b56ad617121d27254a7",
"0x68112b97857fc77108f9a6798c7232d5dcdbb7cfe32adda81f428980e8447d4b",
"0x928e472e82d054e2dd898365fe36931105271ad275d53a40bc9645bed08ffb5c",
"0x6eb020bc1f8db8f43c56de8916c40ccdf0b51cb758ddc762094b4384b7dccf5b",
"0x91872668b8e2c810592ced8a5c054e9c4ed2c894e2df3e842a1ba654d13b9002",
"0xb4bf5257ef6ed56e2ce28dcb003e95342a83cf0d51955dcbea60422894ff2b47",
"0x566dabd4cf065d115a1bb97a76f1c3481efdffcbf8402d58fb5f1cd15eb88edd",
"0xd8084b673e1c72ac33e9b17c5bf2be96928738aa6b00e17075b3b4a0e37f1184"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

