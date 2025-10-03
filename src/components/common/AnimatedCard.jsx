import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import styles from "./AnimatedCard.module.css";

const MotionBox = motion(Box);

const AnimatedCard = ({ delay = 0, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    // triggerOnce: true,
  });

  return (
    <div ref={ref} className={styles.container}>
      <MotionBox
        shadow="md"
        borderRadius="md"
        borderWidth="2px"
        padding="20px"
        initial={{ rotateY: 90, opacity: 0 }}
        animate={inView ? { rotateY: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        {children}
      </MotionBox>
    </div>
  );
};

export default AnimatedCard;
