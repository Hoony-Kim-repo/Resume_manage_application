import { Avatar, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import headerBackground from "../../assets/header_bg.webp";
import profileImg from "../../assets/my-profile-picture.jpg";
import styles from "./Header.module.css";

const Header = ({ name, job }) => {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={styles.container} style={{ height: height }}>
        <img
          className={styles.image}
          src={headerBackground}
          alt="background-img"
          style={{ opacity: 0.3 }}
        />

        <div className={styles.wrapper}>
          <div className={styles.infoContainer}>
            <Avatar.Root size="2xl" boxSize="200px">
              <Avatar.Fallback name="Gihoon Kim" />
              <Avatar.Image src={profileImg} />
            </Avatar.Root>
            <div className={styles.text}>
              <Text textStyle="7xl">{name}</Text>
              <Text fontWeight="light" textStyle="2xl">
                {job}
              </Text>
            </div>
          </div>

          <div className={styles.introduce}>
            <Text fontWeight="bold" textStyle="xl">
              Software engineer with a product mindset, known for shipping
              reliable systems and elevating team standards.
            </Text>
            <Text fontWeight="bold" textStyle="xl">
              From system design to deployment and observability, I deliver
              maintainable solutions and communicate clearly with stakeholders.
            </Text>
            <Text fontWeight="bold" textStyle="xl">
              I’m energized by tough problems and teams that value speed with
              quality.
            </Text>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
