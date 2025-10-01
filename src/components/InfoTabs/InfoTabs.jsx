import { Box, Tabs } from "@chakra-ui/react";
import TabContents from "./TabContents";

const INITIAL_TAB_NAME = ["Projects", "Experiences", "Skills", "Education"];

const InfoTabs = () => {
  return (
    <Tabs.Root
      variant="outline"
      defaultValue={INITIAL_TAB_NAME[0].toLowerCase()}
      orientation="vertical"
    >
      <Tabs.List minWidth="10rem">
        {INITIAL_TAB_NAME.map((tabName) => (
          <Tabs.Trigger
            key={tabName}
            value={tabName.toLowerCase()}
            _selected={{ color: "orange.300", fontWeight: "bold" }}
            fontSize="1xl"
            color="blue.300"
          >
            {tabName}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <Box flex="1" display="flex" justifyContent="center">
        {INITIAL_TAB_NAME.map((tab) => (
          <TabContents key={tab} value={tab.toLowerCase()}></TabContents>
        ))}
      </Box>
    </Tabs.Root>
  );
};

export default InfoTabs;
