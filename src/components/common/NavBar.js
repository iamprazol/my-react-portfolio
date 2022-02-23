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
    <Flex direction="column" top="20%" position="fixed">
      <NavLink to="/">
        <IconContainer
          icon={<CottageIcon style={{ color: "white" }} />}
          margin={true}
        />
      </NavLink>
      <NavLink to="/about">
        <IconContainer
          icon={<PersonIcon style={{ color: "white" }} />}
          margin={true}
        />
      </NavLink>
      <NavLink to="/portfolio">
        <IconContainer
          icon={<BusinessCenterIcon style={{ color: "white" }} />}
          margin={true}
        />
      </NavLink>
      <NavLink to="/contact">
        <IconContainer
          icon={<DraftsIcon style={{ color: "white" }} />}
          margin={true}
        />
      </NavLink>
    </Flex>
  );
};

export default NavBar;
