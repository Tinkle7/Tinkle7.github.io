import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Aboutme.css";
import Resume from "../Resumes/TINKLE_DASH_Resume.pdf";

const Aboutme = () => {
  return (
    <Box bg="#E8E5D7" marginTop="10%" id="about">
      <Box padding="2%">
        <Text fontSize="2xl" textAlign="center" cursor="default">
          ABOUT ME
        </Text>
        <hr class="shine" />
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
      >
        <Box flexGrow="1" flexBasis="0" padding="5%">
          <Image src="https://i.pinimg.com/originals/c0/e1/5f/c0e15fc5b0a8751878fb7ccf17c4fa89.jpg" />
        </Box>
        <Box
          flexGrow="1"
          flexBasis="0"
          padding="2%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box maxWidth="85%" cursor="default">
            <Text as="b" fontSize="xl" className="style_text">
              Coding Is My Passion
            </Text>
            <Text marginY="10%" color="#6e585e">
              Hello World! I'm Tinkle Dash, a Full-Stack Developer,I love
              combining the worlds of logic and creative design to make
              eye-catching, accessible, and user friendly websites and
              applications.I am additcted to coffe and multitasking . I am
              excited to make the leap and continue refining my skills with the
              right company and people.
            </Text>
            <a href={Resume} download>
              <Button>Download Resume</Button>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Aboutme;
