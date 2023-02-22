//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/access/Ownable.sol";

interface IsaveTiger {
    function balanceOf(address owner) external view returns (uint256);

    function tokenOfOwnerByIndex(address owner, uint256 index)
        external
        view
        returns (uint256);
}

contract stDAO is Ownable {
    uint256 public numOfProposals;
    IsaveTiger saveTiger;

    struct Proposal {
        address transferTo;
        uint256 deadline;
        uint256 yayVotes;
        uint256 nayVotes;
        uint256 amount;
        bool executed;
        mapping(uint256 => bool) voters;
    }
    //enum for yay or nay
    enum Vote {
        YAY,
        NAY
    }

    //Mapping

    mapping(uint256 => Proposal) public proposals;
    mapping(uint256 => Proposal) public acceptedProposals;

    //constructor
    constructor(address _saveTiger) {
        saveTiger = IsaveTiger(_saveTiger);
    }

    //modifier

    modifier isProposalActive(uint256 proposalIndex) {
        require(
            proposals[proposalIndex].deadline > block.timestamp,
            "Deadline has been exceed"
        );
        _;
    }

    modifier isDaoMember() {
        require(saveTiger.balanceOf(msg.sender) > 0, "Not a DAO member!");
        _;
    }

    modifier isProposalInActive(uint256 proposalIndex) {
        require(
            proposals[proposalIndex].deadline <= block.timestamp,
            "Still proposal is Active"
        );
        require(
            proposals[proposalIndex].executed == false,
            "Proposal already Over"
        );
        _;
    }

    //createproposal

    function createProposal(address _transferTo, uint256 _amount)
        external
        isDaoMember
        returns (uint256)
    {
        Proposal storage proposal = proposals[numOfProposals];
        proposal.transferTo = _transferTo;
        proposal.deadline = block.timestamp + 5 minutes;
        proposal.amount = _amount;
        proposal.executed = false;
        numOfProposals++;
        return numOfProposals - 1;
    }

    //voteOnProposal
    function voteOnProposal(uint256 proposalIndex, Vote vote)
        external
        isDaoMember
    {
        Proposal storage proposal = proposals[proposalIndex];
        uint256 voterNFTBalance = saveTiger.balanceOf(msg.sender);
        uint256 numVotes = 0;

        for (uint256 i = 0; i < voterNFTBalance; i++) {
            uint256 tokenId = saveTiger.tokenOfOwnerByIndex(msg.sender, i);
            if (proposal.voters[tokenId] == false) {
                numVotes++;
                proposal.voters[tokenId] = true;
            }
        }
        require(numVotes > 0, "Already voted");
        if (vote == Vote.YAY) {
            proposal.yayVotes += numVotes;
        } else {
            proposal.nayVotes += numVotes;
        }
    }

    //executeProposal

    function executeProposal(uint256 proposalIndex)
        external
        isDaoMember
        isProposalActive(proposalIndex)
    {
        Proposal storage proposal = proposals[proposalIndex];
        if (proposal.yayVotes > proposal.nayVotes) {
            require(
                address(this).balance >= proposal.amount,
                "NOT_ENOUGH_FUNDS"
            );
            (bool sent, ) = proposal.transferTo.call{value: proposal.amount}(
                ""
            );
            require(sent, "Something went wrong...");
        }
        proposal.executed = true;
    }

    function withDraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    receive() external payable {}

    fallback() external payable {}

    //withdraw
}
