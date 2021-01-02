require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purchase install argue tail simple'; 
let testAccounts = [
"0x8fad056bf28e6f170ed2218f039edad74491eac80d6618352cc8605b09fd3a7e",
"0xfbb15efeae2b92fd3838874e661414fe289fe56a217cfb4ef5711bacfc17be68",
"0xccc3b9b107e80581d244040f0e702033bdc978b3b74e404689bbb17a8bbd6c5c",
"0xbf4214c0452d13311450d02bd0675a20423491a72cdc1e40001a21d06638d9ac",
"0xcea2c8c702be76c9b43a205ea0354eb8d32bef7ecd1295c0590ab870385a6702",
"0x978ae59b95ead8d490632f64aa9400af050394f92e6743388ccfea8a0a853eb4",
"0x5d6ec14568308b314d871ce1fd918b431ff4108ac6ecc27c25b9b405928dde87",
"0x0620cd1751c5f0de93181804f62cba9e63d7059edc49a907e9f2f9b74883c1aa",
"0x733615d3807cdb884d3d1382e08f17ba3b9c4ed101b9f7f0674e77679917624a",
"0xa7d6e89fc026e92f8d3dd099d98c2217ce7d4a44d0f6082caf1dc5dedf9f7dfc"
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
            version: '^0.5.11'
        }
    }
};
