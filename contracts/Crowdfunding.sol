// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Crowdfunding {
    struct Campaign {
        string title;
        string description;
        address payable benefactor;
        uint goal;
        uint deadline;
        uint amountRaised;
        bool ended;
    }
}
