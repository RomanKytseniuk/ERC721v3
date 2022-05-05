import { expect } from "chai";
import { ethers } from "hardhat";

describe("Artwork Smart Contract Tests", function () {
  let createToken: any;

  beforeEach(async function () {
    // This is executed before each test
    const CreateToken = await ethers.getContractFactory("CreateToken");
    createToken = await CreateToken.deploy("Artwork Contract", "ART");
  });

  it("NFT is minted successfully", async function () {
    const [account1] = await ethers.getSigners();
    const userAmountBefore = await createToken.balanceOf(account1.address);

    expect(userAmountBefore.toString()).to.equal("0");

    const tokenURI = "1";
    await createToken.connect(account1).mint(tokenURI);
    const userAmountAfter = await createToken.balanceOf(account1.address);

    expect(userAmountAfter.toString()).to.equal("1");
  });

  it("tokenURI is set sucessfully", async function () {
    const [account1, account2] = await ethers.getSigners();

    const tokenURI_1 = "1";
    const tokenURI_2 = "2";

    await createToken.connect(account1).mint(tokenURI_1);
    await createToken.connect(account2).mint(tokenURI_2);

    expect(await createToken.tokenURI(0)).to.equal(tokenURI_1);
    expect(await createToken.tokenURI(1)).to.equal(tokenURI_2);
  });
});
