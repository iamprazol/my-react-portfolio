import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flex, VStack } from "@chakra-ui/react";

import NavBar from "./components/common/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  return (
    <VStack>
      <Flex
        w="100%"
        flexWrap="wrap"
        padding="30px"
        align="center"
        background="#111"
      >
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Flex>
    </VStack>
  );
}

export default App;
