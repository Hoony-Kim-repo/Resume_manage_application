import { Tabs } from "@chakra-ui/react";
import CustomSwiper from "../common/CustomSwiper";
import Education from "./Contents/Education/Education";
import { getExperienceSlides } from "./Contents/Experiences/Experiences";
import { getProjectSlides } from "./Contents/Projects/ProjectList";
import Skills from "./Contents/Skills/Skills";

const TabContents = ({ value }) => {
  return (
    <Tabs.Content value={value} h="50vh">
      {value === "projects" && (
        <CustomSwiper>{getProjectSlides()}</CustomSwiper>
      )}
      {value === "experiences" && (
        <CustomSwiper>{getExperienceSlides()}</CustomSwiper>
      )}
      {value === "skills" && <Skills />}
<<<<<<< HEAD
      {value === "education" && <Education />}
=======
      {value === "education" && <h1>education</h1>}
>>>>>>> 6d6cdcbd36210350df38897c8262ae5ded01be86
    </Tabs.Content>
  );
};

export default TabContents;
