import React from "react";
import { Flex, Box } from "@chakra-ui/react";

function IconContainer({ icon }) {
  return (
    <Box
      display="flex"
	  justifyContent="center"
      borderRadius="50%"
      background="#2b2a2a"
      width="50px"
      height="50px"
      alignItems="center"
      backgroundColor="#ffb400"
      mt={5}
      mb={5}
    >
      <Flex justify="center" align="center">
        {icon}
      </Flex>
    </Box>
  );
}

export default IconContainer;
