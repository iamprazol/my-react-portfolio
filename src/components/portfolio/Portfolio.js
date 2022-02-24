import React from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  Image,
  Link,
  Button,
} from "@chakra-ui/react";
import monkeeeImage from "../../images/monkeee.png";
import foodApiImage from "../../images/food-api.jpeg";
import foodFrontImage from "../../images/food-front.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";

const Portfolio = () => {
  return (
    <Stack flex="1" paddingLeft="150px">
      <Flex direction="column" gap="120px">
        <Box display="flex" marginTop="70px" justifyContent="center">
          <Heading size="3xl" color="white" fontWeight="800" lineHeight={0.1}>
            PORT<span style={{ color: "#ffb400" }}>FOLIO</span>
          </Heading>
          <span
            style={{
              fontSize: "110px",
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
        >
          <Flex flex="0 0 45%" direction="column" align="flex-start">
            <Flex direction="column" gap="20px">
              <Box display="flex" marginTop="70px" alignItems="center">
                <Text
                  fontSize="30px"
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
                    fontSize: "7rem",
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
              <Flex justify="start">
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
                      "https://github.com/iamprazol/monkeee-backend-api",
                      "_blank"
                    )
                  }
                  mr={5}
                >
                  VISIT API REPO
                </Button>
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
          </Flex>
          <Box flex="0 0 45%">
            <Image src={foodApiImage} height="280px" borderRadius="20px" />
          </Box>
        </Box>
        <Box
          flex="0 0 45%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box flex="0 0 45%">
            <Image src={foodApiImage} height="280px" borderRadius="20px" />
          </Box>
          <Flex flex="0 0 45%" direction="column" align="flex-start">
            <Flex direction="column" gap="20px">
              <Box display="flex" marginTop="70px" alignItems="center">
                <Text
                  fontSize="30px"
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
                    fontSize: "7rem",
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
