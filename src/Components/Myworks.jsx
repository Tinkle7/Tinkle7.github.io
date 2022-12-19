import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "./Myworks.css";
import cult from "../Icons/cult_fit.png";
import stickey from "../Icons/stickey-note.png";
import lovoda from "../Icons/lovoda.png";
import mail from "../Icons/mailchimp.png";
import netlify from "../Icons/netlify24.png";
import github from "../Icons/icons8-github-24.png";

export const Myworks = () => {
  return (
    <Box
      marginTop="2%"
      paddingY="2%"
      bg="#E8E5D7"
      textAlign="center"
      cursor="default"
      id="projects"
    >
      <Box padding="2%">
        <Text fontSize="2xl" textAlign="center" cursor="default">
          MY WORKS
        </Text>
        <hr class="shine" />
      </Box>
      <Box>
        <SimpleGrid
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)" }}
        >
          <Box className="Project_container">
            <Box padding="5%">
              <Image src={cult} />
            </Box>
            <Box>
              <Text
                as="b"
                fontSize="xl"
                textDecor="#a28089 underline"
                textUnderlineOffset="20%"
              >
                Cultfit.com
              </Text>
            </Box>
            <Box>
              <Text marginY="2%" color="#6e585e">
                Fitness website providing fitness tips and fitness products.
              </Text>
              <Text>HTML | CSS | JS</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth="15%"
              marginX="auto"
              marginTop="3%"
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link
                  href="https://github.com/Sanket01Hiremath/CultFit-Clone.git"
                  target="_blank"
                >
                  <Image src={github} />
                </Link>
              </Box>
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link href="https://clone-clut-fit.netlify.app" target="_blank">
                  <Image src={netlify} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="Project_container">
            <Box padding="5%">
              <Image src={stickey} />
            </Box>
            <Box>
              <Text
                as="b"
                fontSize="xl"
                textDecor="#a28089 underline"
                textUnderlineOffset="20%"
              >
                VM-Note
              </Text>
            </Box>
            <Box>
              <Text marginY="2%" color="#6e585e">
                A sticky note app to make Daily notes.
              </Text>
              <Text>HTML | CSS | JS</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth="15%"
              marginX="auto"
              marginTop="3%"
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link
                  href="https://github.com/Tinkle7/sticky-note.git"
                  target="_blank"
                >
                  <Image src={github} />
                </Link>
              </Box>
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link
                  href="https://tinkle7.github.io/sticky-note/"
                  target="_blank"
                >
                  <Image src={netlify} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="Project_container">
            <Box padding="5%">
              <Image src={lovoda} />
            </Box>
            <Box>
              <Text
                as="b"
                fontSize="xl"
                textDecor="#a28089 underline"
                textUnderlineOffset="20%"
              >
                Lovoda.com
              </Text>
            </Box>
            <Box>
              <Text marginY="2%" color="#6e585e">
                An E-commerce website provides women's accessories.
              </Text>
              <Text>React.js | Chakara UI</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth="15%"
              marginX="auto"
              marginTop="3%"
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link
                  href="https://github.com/Tinkle7/celestial-star-9719.git"
                  target="_blank"
                >
                  <Image src={github} />
                </Link>
              </Box>
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link href="https://lovoda7.netlify.app" target="_blank">
                  <Image src={netlify} />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="Project_container">
            <Box padding="5%">
              <Image src={mail} />
            </Box>
            <Box>
              <Text
                as="b"
                fontSize="xl"
                textDecor="#a28089 underline"
                textUnderlineOffset="20%"
              >
                Mailchimp.com
              </Text>
            </Box>
            <Box>
              <Text marginY="2%" color="#6e585e">
                A website helps you to write proper mail.
              </Text>
              <Text>React.js | Chakara UI</Text>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              maxWidth="15%"
              marginX="auto"
              marginTop="3%"
            >
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link
                  href="https://github.com/Tinkle7/sharp-invention-5151/tree/main/mailchimp.com"
                  target="_blank"
                >
                  <Image src={github} />
                </Link>
              </Box>
              <Box
                boxShadow="rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                _active={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <Link href="https://mailchimp7.netlify.app" target="_blank">
                  <Image src={netlify} />
                </Link>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
      <Box marginTop="5%" marginBottom="3%">
        <Text
          fontSize="xl"
          fontWeight="500"
          className="style_text2"
          w="fit-content"
          margin="auto"
        >
          GIT-HUB STATUS
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-evenly"
        marginBottom={6}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=Tinkle7&theme=gruvbox"
            alt="2016rshah's Github chart"
            margin="auto"
          />
        </Box>
        <Box>
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=Tinkle7&theme=gruvbox"
            alt="2016rshah's Github chart"
            margin="auto"
          />
        </Box>
      </Box>
      <Box>
        <Image
          src="https://ghchart.rshah.org/Tinkle7"
          alt="2016rshah's Github chart"
          margin="auto"
          w="80%"
        />
      </Box>
    </Box>
  );
};
