import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowDownIcon } from "@chakra-ui/icons";
import Resume from "../Resumes/TINKLE_DASH_Resume.pdf";
import { HashLink as Link } from "react-router-hash-link";
import "./Link.css";

function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ base: "flex", sm: "flex", md: "flex", lg: "none", xl: "none" }}
      justifyContent="center"
      alignItems="center"
      bg="none"
    >
      <IconButton
        borderRadius="50%"
        aria-label="menu"
        onClick={onOpen}
        icon={<HamburgerIcon bg="none" />}
      />
      <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="#E8E5D7">
          <DrawerHeader borderBottom="1px solid #e5eaf5">
            Tinkle Dash
          </DrawerHeader>
          <DrawerBody display="flex" flexDir="column" gap={2}>
            <Link
              to="#about"
              className="underline"
              style={{ width: "fit-content" }}
            >
              About
            </Link>
            <Link
              to="#skills"
              className="underline"
              style={{ width: "fit-content" }}
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className="underline"
              style={{ width: "fit-content" }}
            >
              Projects
            </Link>
            <Link
              to="#contacts"
              className="underline"
              style={{ width: "fit-content" }}
            >
              Contacts
            </Link>
            <a href={Resume} download w="fit-content">
              <Button
                colorScheme="teal"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
                gap={1}
                w="40%"
                margin="5% auto"
              >
                <Box bg="none">Resume</Box>

                <Box bg="none">
                  <ArrowDownIcon bg="none" />
                </Box>
              </Button>
            </a>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
