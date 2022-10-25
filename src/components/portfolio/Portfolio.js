import React from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import monkeeeImage from "../../images/monkeee.png";
import BloodBank from "../../images/blood.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import useWindowDimensions from "../helper/useWindowDimensions";

const Portfolio = () => {
  return (
    <Stack flex="1" paddingLeft={{ base: "0px", lg: "150px" }}>
      <Flex direction="column" gap="120px">
        <Box display="flex" marginTop="70px" justifyContent="center">
          <Heading
            size={useWindowDimensions().width > "425" ? "3xl" : "xl"}
            color="white"
            fontWeight="800"
            lineHeight={0.1}
          >
            PORT<span style={{ color: "#ffb400" }}>FOLIO</span>
          </Heading>
          <span
            style={{
              fontSize: useWindowDimensions().width > "425" ? "110px" : "50px",
              letterSpacing: "10px",
              lineHeight: "0.7",
              position: "absolute",
              fontWeight: "800",
              transform: "translateY(-50%)",
              color: "hsla(0,0%,100%,.07)",
            }}
          >
            WORKS
          </span>
        </Box>
        <Box
          flex="0 0 45%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="4px solid #252525"
          padding="40px"
          borderRadius="30px"
          flexDirection={{
            base: "column",
            "2xl": "row",
            xl: "row",
            lg: "column",
            md: "column",
            sm: "column",
          }}
        >
          <Box flex="0 0 30%">
            <Image src={monkeeeImage} height="280px" borderRadius="20px" />
          </Box>
          <Flex flex="0 0 65%" direction="column" align="flex-start">
            <Flex
              flexDirection={{
                base: "row",
                "2xl": "column",
                xl: "column",
                lg: "row",
                md: "row",
                sm: "row",
              }}
              gap={10}
            >
              <Box
                display="flex"
                marginTop="70px"
                alignItems="center"
                flex="0 0 25%"
              >
                <Text
                  fontSize={
                    useWindowDimensions().width > 1024 ? "30px" : "20px"
                  }
                  color="white"
                  lineHeight={0.1}
                  style={{
                    marginLeft: "40px",
                    opacity: 0.8,
                  }}
                >
                  Monkeee
                </Text>
                <span
                  style={{
                    fontSize:
                      useWindowDimensions().width > 1024 ? "7rem" : "5rem",
                    letterSpacing: "10px",
                    lineHeight: "0.7",
                    position: "absolute",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    transform: "translateY(-50%)",
                    color: "hsla(0,0%,100%,.07)",
                  }}
                >
                  01
                </span>
              </Box>
              <Text mt={5} letterSpacing={1} opacity={0.9}>
                Monkeee is an android application to find live as well as
                upcoming parties and events in the clubs in Australia. As a
                developer of the application my task was to build web api for
                the application using{" "}
                <strong style={{ color: "#ffb400" }}>Laravel</strong>{" "}
                technology. I also developed admin panel inorder to let user
                enter datas about suburbs, clubs and events. <br />I also used
                this api to create a web version of Monkeee.
              </Text>
            </Flex>
            <Flex justify="end" width="100%">
              <Button
                width="50%"
                mt={10}
                borderRadius="20px"
                color="#ffb400"
                fontWeight={500}
                height="50px"
                borderColor="#ffb400"
                variant="outline"
                leftIcon={
                  <GitHubIcon
                    style={{ color: "whitesmoke", fontSize: "35px" }}
                  />
                }
                onClick={() =>
                  window.open(
                    "https://github.com/iamprazol/monkeee-backend-api",
                    "_blank"
                  )
                }
                mr={5}
              >
                VISIT API REPO
              </Button>
              <Button
                width="50%"
                mt={10}
                borderRadius="20px"
                color="#ffb400"
                fontWeight={500}
                height="50px"
                borderColor="#ffb400"
                variant="outline"
                leftIcon={
                  <GitHubIcon
                    style={{ color: "whitesmoke", fontSize: "35px" }}
                  />
                }
                onClick={() =>
                  window.open(
                    "https://github.com/iamprazol/monkeee-front",
                    "_blank"
                  )
                }
                mr={5}
              >
                VISIT WEB REPO
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box
          flex="0 0 45%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          border="4px solid #252525"
          padding="40px"
          borderRadius="30px"
          flexDirection={{
            base: "column",
            "2xl": "row",
            xl: "row",
            lg: "column",
            md: "column",
            sm: "column",
          }}
        >
          <Box flex="0 0 30%">
            <Image src={BloodBank} height="280px" borderRadius="20px" />
          </Box>
          <Flex flex="0 0 65%" direction="column" align="flex-start">
            <Flex
              flexDirection={{
                base: "row",
                "2xl": "column",
                xl: "column",
                lg: "row",
                md: "row",
                sm: "row",
              }}
              gap={10}
            >
              <Box
                display="flex"
                marginTop="70px"
                alignItems="center"
                flex="0 0 25%"
              >
                <Text
                  fontSize={
                    useWindowDimensions().width > 1024 ? "30px" : "20px"
                  }
                  color="white"
                  lineHeight={0.1}
                  style={{
                    marginLeft: "40px",
                    opacity: 0.8,
                  }}
                >
                  Blood Bank
                </Text>
                <span
                  style={{
                    fontSize:
                      useWindowDimensions().width > 1024 ? "7rem" : "5rem",
                    letterSpacing: "10px",
                    lineHeight: "0.7",
                    position: "absolute",
                    textTransform: "uppercase",
                    fontWeight: "800",
                    transform: "translateY(-50%)",
                    color: "hsla(0,0%,100%,.07)",
                  }}
                >
                  02
                </span>
              </Box>
              <Text mt={5} letterSpacing={1} opacity={0.9}>
                Blood Bank Management System was a website where people can post
                a request about need of blood and donors can view those request.
                This project was done in coordination of my classmates as minor
                project.
                <br />
                The main feature was notifying donors through email when there
                was a blood request posted, 5km area range around them.
              </Text>
            </Flex>
            <Flex justify="end" width="100%">
              <Button
                mt={10}
                borderRadius="20px"
                color="#ffb400"
                fontWeight={500}
                height="50px"
                width="35%"
                borderColor="#ffb400"
                variant="outline"
                leftIcon={
                  <GitHubIcon
                    style={{ color: "whitesmoke", fontSize: "35px" }}
                  />
                }
                onClick={() =>
                  window.open(
                    "https://github.com/iamprazol/blood-bank-management-system",
                    "_blank"
                  )
                }
                mr={5}
              >
                VISIT REPO
              </Button>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Portfolio;
