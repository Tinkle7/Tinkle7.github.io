import React from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import Resume from "../Resumes/TINKLE_DASH_Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";
import "./Link.css";

function NavbarRight() {
  return (
    <Flex
      justifyContent="space-evenly"
      alignItems="center"
      w="40%"
      display={{
        base: "none",
        sm: "none",
        md: "none",
        lg: "flex",
        xl: "flex",
      }}
      bg="none"
    >
      <Link to="#about" className="underline">
        About
      </Link>
      <Link to="#skills" className="underline">
        Skills
      </Link>
      <Link to="#projects" className="underline">
        Projects
      </Link>
      <Link to="#contacts" className="underline">
        Contacts
      </Link>
      <a href={Resume} download>
        <Button
          colorScheme="teal"
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          gap={2}
        >
          <Box bg="none">Resume</Box>

          <Box bg="none">
            <ArrowDownIcon bg="none" />
          </Box>
        </Button>
      </a>
    </Flex>
  );
}

export default NavbarRight;
