import { Image, List, ScrollArea, Text } from "@chakra-ui/react";
import { LuArrowRight } from "react-icons/lu";
import styles from "./ExperienceItem.module.css";

const ExperienceItem = ({ data }) => {
  const imgSrc = new URL(
    `../../../../assets/company-logo/${data.companyImg}`,
    import.meta.url
  ).href;

  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imgSrc}
          alt={data.companyName + "-logo"}
          objectFit="fill"
          h="100%"
          w="100%"
        />
      </div>
      <div className={styles.infoContainer}>
        <section className={styles.headContainer}>
          <Text fontSize="3xl" fontWeight="bold">
            {data.jobTitle} - {data.companyName}
          </Text>

          <Text>
            {data.startMonth} {data.startYear} ~{" "}
            {data.isCurrentlyWorking
              ? `${data.endMonth} ${data.endYear}`
              : "Present"}
          </Text>
        </section>

        <section className={styles.locationContainer}>
          <Text fontSize="xl">
            {data.city} {data.state}
          </Text>
        </section>

        <section className={styles.descContainer}>
          <ScrollArea.Root variant="always">
            <ScrollArea.Viewport
              css={{
                "--scroll-shadow-size": "4rem",
                "&[data-at-bottom]": {
                  maskImage:
                    "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
                },
              }}
            >
              <ScrollArea.Content>
                <List.Root gap="1" variant="plain">
                  {data.description.map((desc, index) => (
                    <List.Item key={index} _hover={{ bg: "pink.100" }}>
                      <List.Indicator asChild>
                        <LuArrowRight />
                      </List.Indicator>
                      <Text>{desc}</Text>
                    </List.Item>
                  ))}
                </List.Root>
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </ScrollArea.Root>
        </section>
      </div>
    </section>
  );
};

export default ExperienceItem;
