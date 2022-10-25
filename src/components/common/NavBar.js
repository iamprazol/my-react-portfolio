import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import CottageIcon from "@mui/icons-material/Cottage";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DraftsIcon from "@mui/icons-material/Drafts";
import IconContainer from "./IconContainer";

const NavBar = () => {
  const [activeMenuItem, setActiveMenuItem] = useState("home");

  useEffect(() => {
    var parts = window.location.href.split("/");
    var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

    setActiveMenuItem(lastSegment);
  }, []);

  return (
    <Flex
      direction={{
        base: "row",
        "2xl": "column",
        xl: "column",
        lg: "column",
        md: "row",
        sm: "row",
      }}
      top="20%"
      position={activeMenuItem !== "home" ? "fixed" : ""}
      justifyContent="space-between"
      gap={{
        base: "25px",
        "2xl": "0px",
        xl: "0px",
        lg: "0px",
        md: "100px",
        sm: "100px",
      }}
    >
      <NavLink to="/" onClick={() => setActiveMenuItem("home")}>
        <IconContainer
          icon={<CottageIcon style={{ color: "white" }} />}
          margin={true}
          isActive={"home" === activeMenuItem && true}
        />
      </NavLink>
      <NavLink to="/about" onClick={() => setActiveMenuItem("about")}>
        <IconContainer
          icon={<PersonIcon style={{ color: "white" }} />}
          margin={true}
          isActive={"about" === activeMenuItem && true}
        />
      </NavLink>
      <NavLink to="/portfolio" onClick={() => setActiveMenuItem("portfolio")}>
        <IconContainer
          icon={<BusinessCenterIcon style={{ color: "white" }} />}
          margin={true}
          isActive={"portfolio" === activeMenuItem && true}
        />
      </NavLink>
      <NavLink to="/contact" onClick={() => setActiveMenuItem("contact")}>
        <IconContainer
          icon={<DraftsIcon style={{ color: "white" }} />}
          margin={true}
          isActive={"contact" === activeMenuItem && true}
        />
      </NavLink>
    </Flex>
  );
};

export default NavBar;
