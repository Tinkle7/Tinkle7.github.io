import React from "react";
import "./Header.css";
import { Box, Text } from "@chakra-ui/react";

function Header() {
  return (
    <Box>
      <div class="card">
        <Box margin="auto">
          <Box>
            <Text>Hi there</Text>
          </Box>
          <Box bg="none" className="container">
            <Box className="row" bg="none">
              <Box className="col-md-12 text-center" bg="none">
                <Text className="animate-charcter">I AM TINKLE DASH</Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Text>Full-Stack Developer</Text>
          </Box>
        </Box>
        <Box padding="5%" maxW="50%">
          <div class="avatar">
            <img src="https://avatars.githubusercontent.com/u/98764045?v=4" />
          </div>
        </Box>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </div>
    </Box>
  );
}

export default Header;
