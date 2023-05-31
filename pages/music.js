import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/music.module.css";
import images from "../img";

const music = () => {
  const founderArray = [
    {
      name: "Music-1",
      images: images.musics1,
    },
    {
      name: "Music-2",
      images: images.musics2,
    },
    {
      name: "Music-3",
      images: images.musics3,
    },
    {
       name: "Music-4",
      images: images.musics4,
    },
  ];

  
  return (

    <div className={Style.music_box}>
    <div className={Style.music_box_box}>
      {founderArray.map((el, i) => (
        <div className={Style.music_box_box_img}>
          <Image
            src={el.images}
            alt={el.name}
            width={300}
            height={300}
            className={Style.music_box_box_img_img}
          />
          <h3>{el.name}</h3>
        </div>
      ))}
    </div>
  </div>

  );
};

export default music;