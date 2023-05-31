import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>{titleData}🖼️</h1>&nbsp;&nbsp;&nbsp;&nbsp;
          <p>
          The Ultimate NFT marketplace provides a user-friendly platform to create, 
          buy, and sell unique digital assets with an extensive collection of NFTs.
          </p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button 
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.herosection}
            alt="Hero section"
            width={600}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;