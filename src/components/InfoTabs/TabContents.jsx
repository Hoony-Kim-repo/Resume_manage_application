import { Tabs } from "@chakra-ui/react";
import CustomSwiper from "../common/CustomSwiper";
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
      {value === "education" && <h1>education</h1>}
    </Tabs.Content>
  );
};

export default TabContents;
