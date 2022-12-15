import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import NavbarRight from "./NavbarRight";
import Sidebar from "./Sidebar";
import "./Navbar.css";

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
        <Box>
          <div class="wrapper">
            <div class="bg"> Tinkle </div>
            <div class="fg"> Tinkle </div>
          </div>
        </Box>
        <NavbarRight />
        <Sidebar />
      </Flex>
    </Box>
  );
}

export default Navbar;
