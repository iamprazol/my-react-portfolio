import "./App.css";

import React, { Fragment } from "react";
import { Flex, Heading, Text, Box, Image, Spacer } from "@chakra-ui/react";
import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DraftsIcon from "@mui/icons-material/Drafts";
import IconContainer from "./components/common/IconContainer";
import myPic from "./me.png";
function App() {
  return (
    <Flex flexWrap="wrap" padding="30px" align="center" background="#111">
      <Flex direction="column" flex="0 0 15%">
        <IconContainer icon={<CottageIcon style={{ color: "white" }} />} />
        <IconContainer icon={<PersonIcon style={{ color: "white" }} />} />
        <IconContainer
          icon={<BusinessCenterIcon style={{ color: "white" }} />}
        />
        <IconContainer icon={<DraftsIcon style={{ color: "white" }} />} />
      </Flex>
      <Flex direction="column" flex="0 0 50%">
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
    </Flex>
  );
}

export default App;
