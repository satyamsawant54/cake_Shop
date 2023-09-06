import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const HeaderMenuItem = ({ label, url }) => {
  return (
    <Link
      as={RouterLink}
      to={url}
      fontSize="1.1rem"
      letterSpacing="wide"
      textTransform="Capitalize"
      fontFamily="Courier"
      mr="6"
      fontWeight="bold"
      display="flex"
      alignItems="center"
      color="whitesmoke"
      _hover={{ textDecor: "none", color: "cyan" }}
    >
      {label}
    </Link>
  );
};

export default HeaderMenuItem;
