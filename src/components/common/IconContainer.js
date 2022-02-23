import React from "react";
import { Flex, Box } from "@chakra-ui/react";

function IconContainer({ icon, size, margin }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      borderRadius="50%"
      background="#2b2a2a"
      width={size === "small" ? "40px" : "50px"}
      height={size === "small" ? "40px" : "50px"}
      alignItems="center"
      backgroundColor="#ffb400"
      mt={margin ? 5 : 0}
      mb={margin ? 5 : 0}
    >
      <Flex justify="center" align="center">
        {icon}
      </Flex>
    </Box>
  );
}

export default IconContainer;
