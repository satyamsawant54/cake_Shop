import { Button, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";

import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod._id === id);

  return (
    <>
      <Flex mb="5" mt="5">
        <Button
          as={RouterLink}
          to="/"
          color="#1c1c50"
          border="1px solid #000"
          borderRadius="0.7rem"
          padding="1.3rem"
        >
          Go Back
        </Button>
      </Flex>

      <Grid
        templateColumns={{ sm: "1fr", md: "5fr 4fr 3fr" }}
        gap="10"
        style={{ marginTop: "2rem" }}
      >
        {/* Column 1 */}
        <Image
          src={product.image}
          alt={product.name}
          height="475"
          width="500px"
          borderRadius="2rem"
          _hover={{
            opacity: "0.7",
            cursor: "pointer",
          }}
        />

        {/* Column 2 */}
        <Flex direction="column">
          <Heading
            as="h3"
            fontSize="1.7rem"
            mb="8"
            mt="6"
            fontFamily="Arial Black"
          >
            {`Product Rating - ${product.rating}`}
          </Heading>

          <Rating
            value={product.rating}
            color="yellow.500"
            text={`${product.numReviews} reviews`}
          />

          <Heading
            as="h5"
            fontSize="2.5rem"
            fontWeight="bold"
            color="teal.600"
            fontFamily="Arial Black, Georgia"
            my="5"
          >
            {product.category}
          </Heading>

          <Text>{product.description}</Text>
        </Flex>

        {/* Column 3 */}
        <Flex direction="column">
          <Flex justifyContent="space-between">
            {/* <Text>Price: </Text> */}
            <Text fontWeight="bold" fontFamily="Arial Black" fontSize="4rem">
              ₹{product.price}
            </Text>
          </Flex>
        </Flex>
      </Grid><br/>
    </>
  );
};

export default ProductScreen;
