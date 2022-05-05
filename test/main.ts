import { expect } from "chai";
import { ethers } from "hardhat";

describe("Main Test", function () {
  let createContract: any;
  let mainContract: any;

  beforeEach(async function () {
    const CreateContract = await ethers.getContractFactory("CreateToken");
    const MainContract = await ethers.getContractFactory("CheckIftokenERC721");

    createContract = await CreateContract.deploy("Artwork Contract", "ART");
    mainContract = await MainContract.deploy();
    await createContract.deployed();
    await mainContract.deployed();
  });

  it("Should return True", async function () {
    await mainContract.check(createContract.address);
    const result = await mainContract.getRes();
    console.log(result);

    expect(result.toString()).to.equal("true");
  });
});
