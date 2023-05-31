import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const router = useRouter();
  const CategoryArray = [
    {
      images: images.nft_image_3,
      name: "NFTs",
    },
    {
      images: images.natures2,
      name: "Photography",
    },
    {
      images: images.anime,
      name: "Video",
    },
    {
      images: images.musics2,
      name: "Music",
    },
    {
      images: images.arts2,
      name: "Art",
    },
    
  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
         
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={200}
              height={200}
              style={{objectFit:"cover"}}
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}10 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;