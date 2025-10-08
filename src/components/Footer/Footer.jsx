import { Box, Link, Text, VStack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w={"100%"} textAlign="center" py={4} bg="blackAlpha.500">
      <VStack spacing={2}>
        <Text fontSize="sm">Developed by Gihoon Kim</Text>
        <Text fontSize="sm">
          Contact:{" "}
          <Link href="mailto:rlgnsrla512@gmail.com" color={"teal.300"}>
            rlgnsrla512@gmail.com
          </Link>
        </Text>

        <Text fontSize="sm">
          GitHub:
          <Link
            href="https://github.com/Hoony-Kim-repo"
            target="_blank"
            rel="noopener noreferrer"
            color={"teal.300"}
            ml={1}
          >
            GitHub Page
          </Link>
        </Text>

        <Text fontSize="sm">
          LinkedIn:
          <Link
            href="https://www.linkedin.com/in/gihoon-kim-532627196/"
            target="_blank"
            rel="noopener noreferrer"
            color={"teal.300"}
            ml={1}
          >
            LinkedIn Profile
          </Link>
        </Text>
      </VStack>
      <Text>
        &copy; {new Date().getFullYear()} Resume Management Application. All
        rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
