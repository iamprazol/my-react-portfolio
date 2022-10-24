import React, { useState, Fragment } from "react";
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
import { ArrowForwardIcon, ViewIcon } from "@chakra-ui/icons";
import myPic from "../../me.png";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Flex
        direction="column"
        flex="1"
        padding="0px 90px 0px 100px"
        minHeight="90vh"
        justify="center"
      >
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
          I'm Prajjwal Poudel - A tech enthusiast 👨‍💻👨‍💻 working with hands on
          experience with core PHP, Laravel, Rest API's, js, jQuery and React. I
          am also involved into development and maintenance of WordPress
          plugins, that have a huge user base and great WordPress ecosystem
          impact: UserRegistration, Everest Forms.
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
                    I am currently working as Senior PHP Developer cum WordPress
                    Plugin Developer ( Team Lead ) for two WordPress Pluginsi.e
                    User Registration and Everest Forms at ThemeGrill Pvt. Ltd
                    located at Nepal. All the decision regarding both the
                    plugins are made by me.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Before joining ThemeGrill i was working as a Laravel
                    developer at infomax Pvt. Ltd During my time there i was
                    working on projects that didnot make it up to the market and
                    teaching new aspirants was also my job there, so it was more
                    of a teaching job.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Before that i was working as a freelancer and developing web
                    API's for mobile applications using Laravel. Most of the
                    projects didn't make it up to the market, some did but
                    couldnot keep up with it.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Describing myself, i am more of a Backend Developer mainly
                    focused in PHP that said i am also confident in frontend
                    development technologies also.
                  </Text>
                  <Text mt={5} lineHeight={2}>
                    Aside from technical aspect i am more of a movies, series
                    and animes loving person and would like to watch them when i
                    get free. So thats all about me.
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
      <Flex direction="column" flex="0 0 35%">
        <Box height="calc(100vh - 80px)" display="flex" alignItems="center">
          <Image
            src={myPic}
            borderRadius="30px"
            zIndex={1}
            style={{ boxShadow: "0 0 7px rgb(0 0 0 / 90%)" }}
          />
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
    </Fragment>
  );
};

export default Home;
