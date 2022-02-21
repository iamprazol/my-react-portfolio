import React from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DraftsIcon from "@mui/icons-material/Drafts";
import IconContainer from "./IconContainer";

const NavBar = () => {
  return (
    <Flex direction="column" flex="0 0 15%">
      <NavLink to="/">
        <IconContainer icon={<CottageIcon style={{ color: "white" }} />} />
      </NavLink>
      <NavLink to="/about">
        <IconContainer icon={<PersonIcon style={{ color: "white" }} />} />
      </NavLink>
      <NavLink to="/portfolio">
        <IconContainer
          icon={<BusinessCenterIcon style={{ color: "white" }} />}
        />
      </NavLink>
      <NavLink to="/contact">
        <IconContainer icon={<DraftsIcon style={{ color: "white" }} />} />
      </NavLink>
    </Flex>
  );
};

export default NavBar;
