const CreateToken = artifacts.require("CreateToken");

module.exports = async function (deployer) {
  await deployer.deploy(CreateToken, "hello World", "hh");
};
