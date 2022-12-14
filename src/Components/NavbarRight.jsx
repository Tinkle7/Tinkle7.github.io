import React from "react";
import { Box, Link, Flex, Button } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

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
      <Link color="linearGradient(90deg, #e3ffe7 0%, #d9e7ff 100%)" bg="none">
        About
      </Link>
      <Link color="black" bg="none">
        Skills
      </Link>
      <Link color="black" bg="none">
        Projects
      </Link>
      <Link color="black" bg="none">
        Contacts
      </Link>
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
    </Flex>
  );
}

export default NavbarRight;
