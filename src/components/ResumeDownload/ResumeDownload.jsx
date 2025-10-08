import { Box, Button, Image } from "@chakra-ui/react";
import msWordLogo from "../../assets/documents/ms-word.webp";
import PDFLogo from "../../assets/documents/pdf.png";

const ResumeDownload = () => {
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      p={4}
      alignItems={"center"}
      gap={16}
    >
      <a
        href={`${import.meta.env.BASE_URL}/Resume.docx`}
        download={"Gihoon_Kim_Resume.docx"}
      >
        <Button
          colorPalette={"teal"}
          color="white"
          variant="outline"
          size={"2xl"}
          fontFamily={"mono"}
          fontWeight={"bold"}
          _hover={{ bg: "teal.500", color: "white" }}
        >
          <Image
            boxSize="40px"
            objectFit="contain"
            src={msWordLogo}
            alt={"MS Word Logo"}
            mr={2}
          />
          Download Resume as Word
        </Button>
      </a>

      <a
        href={`${import.meta.env.BASE_URL}Resume.pdf`}
        download={"Gihoon_Kim_Resume.pdf"}
      >
        <Button
          colorPalette={"teal"}
          color="white"
          variant="outline"
          size={"2xl"}
          fontFamily={"mono"}
          fontWeight={"bold"}
          _hover={{ bg: "teal.500", color: "white" }}
        >
          <Image
            boxSize="40px"
            objectFit="contain"
            src={PDFLogo}
            alt={"PDF Logo"}
            mr={2}
          />
          Download Resume as PDF
        </Button>
      </a>
    </Box>
  );
};

export default ResumeDownload;
