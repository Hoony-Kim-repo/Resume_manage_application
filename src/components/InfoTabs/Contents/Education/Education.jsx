import { Box, Image, Text } from "@chakra-ui/react";
import senecaCollege from "../../../../assets/education-img/seneca-college.jpg";

const Education = () => {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      justifyContent={"cneter"}
      alignContent={"center"}
    >
      <Box display={"flex"} h={"80%"}>
        <Image src={senecaCollege} h={"100%"} />
        <Box backgroundColor={"#FFFDD0"} color={"black"} h={"100%"} p={4}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Seneca College
          </Text>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Diploma, Computer Programming and Analysis
          </Text>
          <Text fontSize={"md"} fontWeight={"normal"}>
            Graduated: January 2021
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Education;
