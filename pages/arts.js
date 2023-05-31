import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/arts.module.css";
import images from "../img";

const arts = () => {
  const founderArray = [
    {
      name: "BlueLight",
      images: images.arts1,
    },
    {
      name: "Glow",
      images: images.arts2,
    },
    {
      name: "Music",
      images: images.arts3,
    },
    {
       name: "Three Faces",
      images: images.arts4,
    },
  ];

  
  return (

    <div className={Style.arts_box}>
    <div className={Style.arts_box_box}>
      {founderArray.map((el, i) => (
        <div className={Style.arts_box_box_img}>
          <Image
            src={el.images}
            alt={el.name}
            width={300}
            height={300}
            className={Style.arts_box_box_img_img}
          />
          <h3>{el.name}</h3>
        </div>
      ))}
    </div>
  </div>

  );
};

export default arts;