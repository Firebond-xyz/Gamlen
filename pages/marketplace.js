import React from "react";
import Navbar from "../components/navigation/navbar";
import InstructionsComponent from "../components/InstructionsComponent";
import NftBids from "../components/nftBids";
import NftGallery from "../components/nftGallery";

const Marketplace = () => {
  return (
    <div>
      <Navbar />
      <InstructionsComponent />
      <NftGallery
        walletAddress={"0x005Fa83d9894653CE120672dca54E2E0aAbf1C31"}
        chain={"MATIC_MUMBAI"}
      />
      <NftBids />
    </div>
  );
};

export default Marketplace;
