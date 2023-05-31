import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/photography.module.css";
import images from "../img";

const photography = () => {
  const founderArray = [
    {
      name: "Squirel",
      images: images.natures1,
    },
    {
      name: "Droplet",
      images: images.natures2,
    },
    {
      name: "Beautiful Nature",
      images: images.natures3,
    },
    {
       name: "Forest",
      images: images.natures4,
    },
  ];

  
  return (

    <div className={Style.photography_box}>
    <div className={Style.photography_box_box}>
      {founderArray.map((el, i) => (
        <div className={Style.photography_box_box_img}>
          <Image
            src={el.images}
            alt={el.name}
            width={300}
            height={300}
            className={Style.photography_box_box_img_img}
          />
          <h3>{el.name}</h3>
        </div>
      ))}
    </div>
  </div>

  );
};

export default photography;