const CheckIftokenERC721 = artifacts.require("CheckIftokenERC721");

module.exports = async function (deployer) {
  await deployer.deploy(CheckIftokenERC721);
};
