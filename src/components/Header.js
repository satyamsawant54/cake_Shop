import { Box, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";

import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
      py="3"
      px="5"
      bgColor="gray.800"
      zIndex="99999"
      w="100%"
      pos="fixed"
      top="0"
      left="0"
    >
      {/* Title/Logo */}
      <Link as={RouterLink} to="/">
        <Heading
          as="h1"
          color="skyblue"
          fontWeight="bold"
          fontSize="2.5rem"
          letterSpacing="wide"
          fontFamily="Courier"
        >
          cakeShop
        </Heading>
      </Link>

      {/* Hamburger Menu */}
      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setShow(!show)}
      >
        <Icon as={HiOutlineMenuAlt3} color="white" w="6" h="6" />
      </Box>

      {/* Menu */}
      <Box
        display={{ base: show ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        mt={{ base: 4, md: 0 }}
      >
        <HeaderMenuItem label="Home" url="/" />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <HeaderMenuItem label="About" url="/about" /> &nbsp;&nbsp;&nbsp;&nbsp;
        <HeaderMenuItem label="Contact" url="/contact" />
      </Box>
    </Flex>
  );
};

export default Header;
