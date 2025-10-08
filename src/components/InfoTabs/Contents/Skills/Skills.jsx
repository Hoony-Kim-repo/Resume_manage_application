import { Flex, Image, Text, WrapItem } from "@chakra-ui/react";
import skills from "./Skills.json";

import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <Flex direction="column" className={styles.container}>
      {skills.map((skill) => (
        <Flex key={skill.id} align={"center"}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign={"left"}
            mr={10}
            flex={1}
          >
            {skill.category}
          </Text>

          <Flex gap={4} wrap={"wrap"} align="center" mt={2} flex={3}>
            {skill.skills.map((item, idx) => (
              <WrapItem key={idx}>
                <Flex align="center" mr={2} mb={2}>
                  <Image
                    boxSize="40px"
                    objectFit="contain"
                    src={item.icon}
                    alt={item.name}
                    mr={2}
                  />
                  <Text fontSize="md">{item.name}</Text>
                </Flex>
              </WrapItem>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default Skills;
