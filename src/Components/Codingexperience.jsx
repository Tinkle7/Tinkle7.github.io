import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Codingexperience.css";

export const Codingexperience = () => {
  return (
    <Box textAlign="center" cursor="default">
      <Box marginTop="5%" marginBottom="3%">
        <Text
          fontSize="xl"
          fontWeight="500"
          className="style_text2"
          w="fit-content"
          margin="auto"
        >
          MY CODING EXPERIENCE
        </Text>
      </Box>
      <Box
        display="flex"
        margin="auto"
        maxWidth={{ base: "77%", md: "50%" }}
        justifyContent="space-evenly"
        bg="#E8E5D7"
        padding="2%"
        borderRadius="10%"
        fontSize="md"
        fontWeight="500"
        boxShadow="rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"
      >
        <Box display="flex" flexDir="column" gap={20}>
          <Box>
            <Text>1200+ Hours of</Text>
            <Text>Coding</Text>
          </Box>
          <Box>
            <Text>100+</Text>
            <Text>Git commits</Text>
          </Box>
        </Box>
        <Box display="flex" flexDir="column" gap={20}>
          <Box>
            <Text>400+ Questions of</Text>
            <Text>DSA</Text>
          </Box>
          <Box>
            <Text>2+</Text>
            <Text>Collaborative Projects</Text>
          </Box>
        </Box>
        <Box display="flex" flexDir="column" gap={20}>
          <Box>
            <Text>100+ Hours of</Text>
            <Text>Soft Skills</Text>
          </Box>
          <Box>
            <Text>4+</Text>
            <Text>Solo Projects</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
