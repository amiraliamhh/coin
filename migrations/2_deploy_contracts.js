var ConvertLib = artifacts.require("./ConvertLib.sol");
var AmiraliCoin = artifacts.require("./AmiraliCoin.sol");

module.exports = function (deployer) {
    deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, AmiraliCoin);
    deployer.deploy(AmiraliCoin);
};