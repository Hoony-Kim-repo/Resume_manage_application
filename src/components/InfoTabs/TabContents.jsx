import { Tabs } from "@chakra-ui/react";
import CustomSwiper from "../common/CustomSwiper";
import { getProjectSlides } from "./Contents/Projects/ProjectList";

const TabContents = ({ value }) => {
  return (
    <Tabs.Content value={value}>
      {value === "projects" && (
        <CustomSwiper>{getProjectSlides()}</CustomSwiper>
      )}
      {value === "experiences" && <h1>experiences</h1>}
      {value === "skills" && <h1>skills</h1>}
      {value === "education" && <h1>education</h1>}
    </Tabs.Content>
  );
};

export default TabContents;
