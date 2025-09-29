import { Tabs } from "@chakra-ui/react";
import TabContents from "./TabContents";

const INITIAL_TAB_NAME = ["Projects", "Experiences", "Skills", "Education"];
const InfoTabs = () => {
  return (
    <Tabs.Root
      variant="outline"
      defaultValue={INITIAL_TAB_NAME[0].toLowerCase()}
      orientation="vertical"
      colorPalette="red"
    >
      <Tabs.List>
        {INITIAL_TAB_NAME.map((tabName) => (
          <Tabs.Trigger
            key={tabName}
            value={tabName.toLowerCase()}
            _selected={{ color: "orange.300", fontWeight: "bold" }}
            color="blue.300"
            minW="10rem"
          >
            {tabName}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {INITIAL_TAB_NAME.map((tab) => (
        <TabContents key={tab} value={tab.toLowerCase()}></TabContents>
      ))}
    </Tabs.Root>
  );
};

export default InfoTabs;
