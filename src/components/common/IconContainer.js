import React from "react";
import { Button } from "@chakra-ui/react";

function IconContainer({ icon, size, margin, isActive }) {
  return (
    <Button
      display="flex"
      justifyContent="center"
      borderRadius="50%"
      background={isActive ? "#ffb400" : "#2b2a2a"}
      width={size === "small" ? "40px" : "50px"}
      height={size === "small" ? "40px" : "50px"}
      alignItems="center"
      mt={margin ? 5 : 0}
      mb={margin ? 5 : 0}
    >
      {icon}
    </Button>
  );
}

export default IconContainer;
