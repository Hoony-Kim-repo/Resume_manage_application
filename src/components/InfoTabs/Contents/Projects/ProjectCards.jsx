import { Card, Image, Link } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";
import styles from "./ProjectCards.module.css";

const ProjectCards = ({ title, description, img, imgAlt, gitHubLink }) => {
  return (
    <section className={styles.container}>
      <Card.Root size="sm" w="xs" h="xs">
        <Image
          boxSize="200px"
          objectFit="fill"
          w="100%"
          src={img}
          alt={imgAlt}
        />
        <Card.Body>
          <Card.Title color={"blackAlpha.950"}>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
          <Link href={gitHubLink} target="_blank" rel="noopener noreferrer">
            Visit GitHub Repository <LuExternalLink />
          </Link>
        </Card.Body>
      </Card.Root>
    </section>
  );
};

export default ProjectCards;
