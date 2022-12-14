import React from "react";
import {
  Box,
  IconButton,
  Drawer,
  DrawerBody,
  //   DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, ArrowDownIcon } from "@chakra-ui/icons";

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
            <Link>About</Link>
            <Link>Skills</Link>
            <Link>Projects</Link>
            <Link>Contacts</Link>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
