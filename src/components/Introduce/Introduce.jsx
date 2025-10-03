import { Container } from "@chakra-ui/react";

import AnimatedCard from "../common/AnimatedCard";

const Introduce = () => {
  return (
    <div>
      <Container maxW="xs" px="2">
        <AnimatedCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
        </AnimatedCard>

        <AnimatedCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
        </AnimatedCard>

        <AnimatedCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur, tortor in lacinia eleifend, dui nisl tristique nunc.
        </AnimatedCard>
      </Container>
    </div>
  );
};

export default Introduce;
