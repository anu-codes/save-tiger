// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract saveTiger is Ownable, ERC721Enumerable {
    using Strings for uint256;
    string _baseTokenURI;
    uint256 public _price = 0.07 ether;
    bool public _paused;
    uint256 public maxTokenSupply = 69;
    uint256 public tokenIds;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract is currently paused");
        _;  
    }

    constructor(string memory baseURI) ERC721("SaveTiger", "ST") {
        _baseTokenURI = baseURI;
    }

    function mint() public payable onlyWhenNotPaused {
        require(tokenIds < maxTokenSupply, "Maxium supply has been reached");
        require(msg.value >= _price, "Ether sent is ot sufficient");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721 Metadata: URI query for non existent token"
        );
        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }

    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    function withDraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether ");
    }

    receive() external payable {}

    fallback() external payable {}
}