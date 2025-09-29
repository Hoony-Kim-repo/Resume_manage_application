import { Box, Container } from "@chakra-ui/react";

import styles from "./Introduce.module.css";

const Introduce = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerConainer}>
        <Container maxW="xs" px="2">
          <Box shadow="md" borderRadius="md" borderWidth="2px" padding="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
          </Box>
        </Container>
      </div>
      <div id={styles.innerConainer}>
        <Container maxW="xs" px="2">
          <Box shadow="md" borderRadius="md" borderWidth="2px" padding="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Introduce;
