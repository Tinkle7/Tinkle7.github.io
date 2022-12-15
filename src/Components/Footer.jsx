import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import React from "react";
import "./Skills.css";
import github from "../Icons/icons8-github-squared-100.png";
import linkdin from "../Icons/icons8-linkedin-100.png";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box id="contacts">
      <Box padding="2%">
        <Text fontSize="2xl" textAlign="center" cursor="default">
          CONTACT ME
        </Text>
        <hr class="shine" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Box flexGrow="1" flexBasis="0">
          <Box padding="10%">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormLabel>Name</FormLabel>
              <Input
                htmlSize={20}
                width="auto"
                placeholder="enter your name here"
              />
              <FormLabel>Number</FormLabel>
              <Input
                htmlSize={4}
                width="auto"
                type="number"
                placeholder="enter your number here"
              />
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Write your message here" size="sm" />
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </Box>
        </Box>
        <Box
          flexGrow="1"
          flexBasis="0"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          gap={{ base: "10", md: "2" }}
        >
          <Box display="flex" justifyContent="space-evenly" alignItems="center">
            <Link
              href="https://github.com/Tinkle7"
              target="_blank"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              _active={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            >
              <Image src={github} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tinkle-dash-a3b279204/"
              target="_blank"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              _active={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
              }}
            >
              <Image src={linkdin} />
            </Link>
          </Box>
          <Box cursor="default">
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              alignItems="center"
            >
              <EmailIcon />
              <Text fontSize="lg" fontWeight="600">
                tinkledash@gmail.com
              </Text>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              gap={2}
              alignItems="center"
            >
              <PhoneIcon />
              <Text fontSize="lg" fontWeight="600">
                +91-7008344726
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
