import React, { Fragment } from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  Image,
  Stack,
  Button,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import myPic from "../../me.png";
import useWindowDimensions from "../helper/useWindowDimensions";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const DisplayPicture = () => {
    return (
      <Flex direction="column" flex="0 0 35%">
        <Box
          height="calc(100vh - 80px)"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={myPic}
            zIndex={1}
            style={{ boxShadow: "0 0 7px rgb(0 0 0 / 90%)" }}
            height={useWindowDimensions().width <= "768" && "200px"}
            width={useWindowDimensions().width <= "768" && "150px"}
            border={useWindowDimensions().width <= "768" && "5px solid #252525"}
            borderRadius={"30px"}
          />
        </Box>
      </Flex>
    );
  };

  return (
    <Fragment gap={{ base: "0px", lg: "50px" }}>
      {useWindowDimensions().width <= "768" && <DisplayPicture />}
      <Flex
        direction="column"
        flex="1"
        padding={useWindowDimensions().width > "768" && "0px 90px 0px 100px"}
        minHeight="90vh"
        justify="center"
      >
        <Flex alignItems="center">
          <Heading
            color="gold"
            fontSize={{
              base: "lg",
              "2xl": "4xl",
              xl: "3xl",
              lg: "2xl",
              md: "xl",
              sm: "lg",
            }}
          >
            I'M PRAJJWAL POUDEL.
            <span style={{ color: "white" }}> WEB DEVELOPER</span>
          </Heading>
        </Flex>
        <Text color="white" mt={5} lineHeight={2}>
          I'm Prajjwal Poudel, a tech enthusiast 👨‍💻👨‍💻 who has practical
          expertise with React, Laravel, core PHP, and jQuery. Additionally, I
          work on the creation and upkeep of WordPress plugins with a
          significant user base and positive effects on the WordPress ecosystem:
          Everest Forms, UserRegistration
        </Text>
        <Stack direction="row" spacing={4} mt={5} alignItems={"center"}>
          <Button
            colorScheme="whiteAlpha"
            variant="outline"
            rightIcon={<ArrowForwardIcon />}
            color={"#ffb400"}
            borderRadius={"35px"}
            onClick={onOpen}
          >
            MORE ABOUT ME
          </Button>
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
            scrollBehavior={"inside"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color={"white"} textAlign={"center"}>
                SUMMARY
              </ModalHeader>
              <ModalCloseButton color={"white"} />
              <ModalBody>
                <Flex direction="column">
                  <Text mt={5} lineHeight={2}>
                    At ThemeGrill Pvt. Ltd in Nepal, I am currently working as
                    Senior PHP Developer and WordPress Plugin Developer (Team
                    Lead) on two WordPress Plugins, User Registration and
                    Everest Forms. I am solely responsible for all decisions
                    relating to both plugins.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    I was employed as a Laravel developer at infomax Pvt. Ltd.
                    prior to joining ThemeGrill. It was more of a teaching
                    position during my tenure there because I worked on projects
                    that were never released to the public and also had the
                    responsibility of training new employees.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Prior to that, I was working as a freelancer and using
                    Laravel to create web APIs for mobile applications. The
                    majority of the ventures failed to reach the market; those
                    that did could not maintain their level of success.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    I would classify myself as more of a backend developer, with
                    a primary focus on PHP, while I am equally comfortable with
                    frontend development technologies.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Aside from technical matters, I enjoy watching movies,
                    television shows, and animes whenever I have time. So that's
                    all there is to know about me.
                  </Text>
                </Flex>
              </ModalBody>
              <ModalFooter>
                <Link href="https://www.facebook.com/iamprazol/" isExternal>
                  <Button colorScheme="facebook" mr={3}>
                    Facebook
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/prajjwal-poudel-980861178/"
                  isExternal
                >
                  <Button colorScheme="linkedin" mr={3}>
                    Linkedin
                  </Button>
                </Link>
                <Link href="https://www.github.com/iamprazol/" isExternal>
                  <Button mr={3}>Github</Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Flex>
      {useWindowDimensions().width > "768" && <DisplayPicture />}
      {useWindowDimensions().width > "768" && (
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
      )}
    </Fragment>
  );
};

export default Home;
