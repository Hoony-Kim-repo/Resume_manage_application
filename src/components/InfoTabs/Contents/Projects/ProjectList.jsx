import { SwiperSlide } from "swiper/react";
import chatbotImage from "../../../../assets/chatbot.avif";
import resumeImage from "../../../../assets/resume.jpg";
import ProjectCards from "./ProjectCards";
import projects from "./projects.json";

const imageMap = {
  "resume.jpg": resumeImage,
  "chatbot.avif": chatbotImage,
};

export const getProjectSlides = () => {
  return projects.map((project) => (
    <SwiperSlide
      key={project.id}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProjectCards
        title={project.title}
        description={project.description}
        img={imageMap[project.img]}
        imgAlt={project.imgAlt}
        gitHubLink={project.gitHubLink}
      />
    </SwiperSlide>
  ));
};
