import { Grid, Heading } from "@chakra-ui/react";

import ProductCard from "../components/ProductCard";
import products from "../products";

const HomeScreen = () => {
  return (
    <>
      <Heading
        as="h2"
        mb="12"
        mt="10"
        fontSize="2.2rem"
        fontFamily="Georgia"
        fontWeight="bold"
        fontStyle="oblique"
        color="#1c1c50"
      >
        Our Cake Products
      </Heading>

      <Grid
        templateColumns={{
          sm: "1fr",
          md: "1fr 1fr",
          lg: "1fr 1fr 1fr",
          xl: "1fr 1fr 1fr 1fr",
        }}
        gap="5"
      >
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Grid>

    </>
  );
};

export default HomeScreen;
