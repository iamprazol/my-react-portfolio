import React, { Fragment } from "react";
import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import myPic from "../../me.png";

const Home = () => {
  return (
    <Fragment>
      <Flex direction="column" flex="1" paddingLeft="150px">
        <Flex alignItems="center">
          <span
            style={{
              content: "",
              height: "6px",
              width: "60px",
              borderRadius: "10px",
              background: "gold",
              marginRight: "30px",
              marginBottom: "35px",
            }}
          ></span>
          <Heading color="gold" size="2xl">
            I'M PRAJJWAL POUDEL.
            <span style={{ color: "white" }}> WEB DEVELOPER</span>
          </Heading>
        </Flex>
        <Text color="white" mt={5} lineHeight={2}>
          Being a Student of Computer Engineering, I always put myself forward
          when it comes to learning innovative things about technology.
        </Text>
      </Flex>
      <Flex direction="column" flex="0 0 35%">
        <Box height="calc(100vh - 80px)" display="flex" alignItems="center">
          <Image src={myPic} borderRadius="15%" zIndex={1} />
        </Box>
      </Flex>
      <span
        style={{
          position: "fixed",
          height: "200%",
          width: "100%",
          transform: "rotate(15deg)",
          right: "-83%",
          top: "-50%",
          background: "#ffb400",
        }}
      ></span>
    </Fragment>
  );
};

export default Home;
