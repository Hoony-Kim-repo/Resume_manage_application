import { SwiperSlide } from "swiper/react";

import ExperienceItem from "./ExperienceItem";
import experiences from "./Experiences.json";

export const getExperienceSlides = () => {
  return experiences.map((exp) => (
    <SwiperSlide
      key={exp.id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ExperienceItem data={exp} />
    </SwiperSlide>
  ));
};
