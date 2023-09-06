import { Flex } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Flex
        as="main"
        mt="72px"
        direction="column"
        py="6"
        px="6"
        bgColor="rgb (173,216,230)"
      >
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
