import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavbarRight from "./NavbarRight";
import Sidebar from "./Sidebar";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  return (
    <Box bg="#cfb53b" padding="5px" position="sticky" zIndex="4" top="0">
      <Flex
        minWidth="max-content"
        alignItems="center"
        maxW="95%"
        margin="auto"
        justifyContent="space-between"
        cursor="pointer"
        bg="none"
      >
        <Link to="#top">
          <div class="wrapper">
            <div class="bg"> Tinkle </div>
            <div class="fg"> Tinkle </div>
          </div>
        </Link>
        <NavbarRight />
        <Sidebar />
      </Flex>
    </Box>
  );
}

export default Navbar;
