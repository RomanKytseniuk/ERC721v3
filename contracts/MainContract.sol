//SPDX-License-Identifier: MIT
pragma solidity 0.8.13; 

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";

contract CheckIftokenERC721{
  // this contract returned true if given address is ERC721 contract
  // I understand your verify like check if given address is ERC721 <3 
  IERC721Enumerable testSubject;
  bool public res;
  function check(address _testSubject) public{
      testSubject = IERC721Enumerable(_testSubject);
      res = testSubject.supportsInterface(0x80ac58cd);
  }
  function getRes() public view returns(bool){
    return res;
  }
}