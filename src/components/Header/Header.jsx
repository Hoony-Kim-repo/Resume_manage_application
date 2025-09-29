import { Avatar } from "@chakra-ui/react";
import profileImg from "../../assets/my-profile-picture.jpg";
import headerBackground from "../../assets/header_bg.webp";
import styles from "./Header.module.css";

const Header = ({ name, job }) => {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.image}
          src={headerBackground}
          alt="background-img"
          style={{ opacity: 0.3 }}
        />

        <div className={styles.infoContainer}>
          <Avatar.Root size="2xl" boxSize="200px">
            <Avatar.Fallback name="Gihoon Kim" />
            <Avatar.Image src={profileImg} />
          </Avatar.Root>
          <div className={styles.text}>
            <h1>{name}</h1>
            <h3>{job}</h3>
          </div>
        </div>
      </div>

      <p></p>
    </>
  );
};

export default Header;
