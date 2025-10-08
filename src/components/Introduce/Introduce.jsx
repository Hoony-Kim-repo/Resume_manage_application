import { Box, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const strengths = [
  {
    title: "Team Collaboration",
    details: [
      "Proactively organizes and prioritizes tasks to enhance team efficiency.",
      "Communicates actively with team members to clarify roles and priorities.",
      "Provides support when others face challenges, fostering a cooperative atmosphere.",
      "Seeks help when needed and contributes to collective problem-solving.",
    ],
  },
  {
    title: "Fast Learner",
    details: [
      "Quickly adapts to new languages and technologies required by diverse projects.",
      "Successfully completed projects in React, Python, and C# (converted from Visual Basic).",
      "Continuously learns by experimenting with new frameworks and APIs to expand skillsets.",
    ],
  },
  {
    title: "Analytical Thinking & Problem Solver",
    details: [
      "Approaches challenges logically to identify effective solutions.",
      "Applies structured reasoning to trace root causes of technical issues.",
      "Utilizes debugging tools and performance metrics to make data-driven improvements.",
    ],
  },
];

const MotionBox = motion.create(Box);
const MotionText = motion.create(Text);

export default function StrengthSection() {
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);

  const activeIndex = hovered !== null ? hovered : selected;

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="start"
      w="100%"
      p={8}
      color="white"
      bg="rgb(32,42,68)"
      borderRadius="lg"
      gap={12}
    >
      {/* LEFT SIDE — TITLES */}
      <Flex direction="column" gap={4} flex="1">
        {strengths.map((item, idx) => {
          const isActive = activeIndex === idx;
          const isSelected = selected === idx;
          return (
            <MotionBox
              key={idx}
              cursor="pointer"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(selected === idx ? null : idx)}
              border="2px solid"
              borderColor={isActive ? "teal.300" : "transparent"}
              borderRadius="md"
              p={3}
              transition="all 0.25s ease"
              bg={isSelected ? "rgba(255,255,255,0.08)" : "transparent"}
              whileHover={{ scale: 1.03 }}
              animate={{
                scale: isSelected ? 1.03 : 1,
              }}
              _hover={{
                borderColor: "teal.300",
                bg: "rgba(255,255,255,0.05)",
              }}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                color={isActive ? "teal.300" : "gray.200"}
                transition="color 0.25s"
              >
                {item.title}
              </Text>
            </MotionBox>
          );
        })}
      </Flex>

      {/* RIGHT SIDE — ANIMATED DETAILS */}
      <Flex
        flex="2"
        minH="240px"
        align="start"
        justify="start"
        position="relative"
      >
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <MotionBox
              key={activeIndex}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              bg="rgba(255,255,255,0.08)"
              p={6}
              borderRadius="md"
              shadow="lg"
              border="1px solid rgba(255,255,255,0.2)"
              position="absolute"
              width="100%"
            >
              {strengths[activeIndex].details.map((line, i) => (
                <MotionText
                  key={i}
                  mb={2}
                  fontSize="md"
                  color="gray.100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * i,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  • {line}
                </MotionText>
              ))}
            </MotionBox>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
}
