import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./CustomSwiper.module.css";

const CustomSwiper = ({ children }) => {
  return (
    <Swiper
      className={styles.swiper}
      pagination={{
        type: "fraction",
      }}
      slidesPerView={1}
      navigation={true}
      modules={[Pagination, Navigation]}
      spaceBetween={50}
      observer={true}
      observeParents={true}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
