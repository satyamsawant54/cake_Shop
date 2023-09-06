import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import Rating from "./Rating";

const ProductCard = ({ product }) => {
  return (
    <Link
      as={RouterLink}
      to={`/products/${product._id}`}
      _hover={{ textDecor: "none" }}
    >
      <Box
        _hover={{
          // transform: "scale(0.8)",
          // transition: "transform .5s",
          opacity: 0.9,
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          w="full"
          h="400px"
          objectFit="cover"
          borderRadius="1.3rem"
        />
        <Flex py="5" direction="column" justifyContent="space-between">
          <Heading
            as="h4"
            fontSize="1.5rem"
            fontFamily="Arial Black"
            color="000"
            mb="3"
            mt="3"
            style={{ textAlign: "center" }}
          >
            {product.category}
          </Heading>
          <Flex alignItems="center" justifyContent="space-between">
            <Rating value={product.rating} color="gold" />
            <Text fontSize="4xl" fontWeight="bold" color="blue.600">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Link>
  );
};

export default ProductCard;
