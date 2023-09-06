import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      justifyContent="center"
      bgColor="black"
      padding="1.1rem"
      color="whitesmoke"
      fontFamily="Courier"
      fontSize="1.2rem"
      fontWeight="bold"
      textAlign="center"
    >
      <Text mt="3">
        Copyrights {new Date().getFullYear()}&nbsp;cakeshop@gmail.com
      </Text>
      <br />
    </Flex>
  );
};

export default Footer;
