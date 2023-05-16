import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SidebarContent = ({ onClick }) => (
  <VStack>
    <Button as={Link} to="/" w="100%">
      Home
    </Button>
    <Button as={Link} to="/blog" w="100%">
      Blogs
    </Button>
    <Button as={Link} to="/about-us" w="100%">
      About
    </Button>
    <Button as={Link} to="/contact" w="100%">
      Contact
    </Button>
  </VStack>
);

const Sidebar = ({ isOpen, variant, onClose }) => {
  return variant === "sidebar" ? (
    <></>
  ) : (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Apni Dharohar</DrawerHeader>
          <DrawerBody>
            <SidebarContent onClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default Sidebar;
