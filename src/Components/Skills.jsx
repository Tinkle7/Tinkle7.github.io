import React from "react";
import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "./Skills.css";
import html from "../Icons/icons8-html-filetype-100.png";
import css from "../Icons/icons8-css-filetype-100.png";
import js from "../Icons/icons8-javascript-100.png";
import react from "../Icons/icons8-react-100.png";
import typescript from "../Icons/icons8-typescript-100.png";
import redux from "../Icons/icons8-redux-100.png";
import bootstrap from "../Icons/icons8-bootstrap-100.png";
import chakaraui from "../Icons/icons8-chakra-ui-100.png";
import git from "../Icons/icons8-git-100.png";
import netlify from "../Icons/icons8-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites.-100.png";

const Skills = () => {
  const Data = [
    {
      url: html,
      label: "HTML",
    },
    {
      url: css,
      label: "CSS",
    },
    {
      url: js,
      label: "JS",
    },
    {
      url: react,
      label: "React.js",
    },
    {
      url: typescript,
      label: "Typescript",
    },
    {
      url: redux,
      label: "Redux",
    },
    {
      url: bootstrap,
      label: "Bootstrap",
    },
    {
      url: chakaraui,
      label: "Chakara",
    },
    {
      url: git,
      label: "Git",
    },
    {
      url: netlify,
      label: "Netlify",
    },
  ];

  return (
    <div>
      <Box>
        <Box padding="2%">
          <Text fontSize="2xl" textAlign="center" cursor="default">
            SKILLS
          </Text>
          <hr class="shine" />
        </Box>
      </Box>
      <Box>
        <SimpleGrid
          columns={{ base: "3", sm: "3", md: "5" }}
          gap={5}
          padding="2%"
          className="grid"
        >
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[0].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[0].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[1].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[1].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[2].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[2].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[3].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[3].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[4].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[4].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[5].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[5].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[6].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[6].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[7].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[7].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[8].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[8].label}
              </Text>
            </Box>
          </Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            margin="auto"
            display={{ base: "none", md: "block" }}
            className="image"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding="2%"
            >
              <Image w="100%" src={Data[9].url} />
            </Box>
            <Box textAlign="center" padding="2%">
              <Text fontSize="xl" fontWeight="600">
                {Data[9].label}
              </Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Skills;
