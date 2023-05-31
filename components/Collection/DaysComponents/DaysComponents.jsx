import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ el, i }) => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={400}
            height={300}
            style={{objectFit:"covers"}}
          />
        </div>

            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>{i+1}1.255 ETH</small>
            </div>
          </div>
        //</div>
      //</div>
    //</div>
  );
};

export default DaysComponents;
