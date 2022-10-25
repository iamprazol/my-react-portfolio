import React, { useState, useRef } from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  Link,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import USER_DATA from "../helper/emailkey";

import ContactMailIcon from "@mui/icons-material/ContactMail";
import MapIcon from "@mui/icons-material/Map";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

const Contact = () => {
  const form = useRef();
  const toast = useToast();
  const [sendingMessage, setSendingMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default refresh by the browser
    setSendingMessage(true);

    emailjs
      .sendForm(
        USER_DATA.SERVICE_ID,
        USER_DATA.TEMPLATE_ID,
        form.current,
        USER_DATA.USER_ID
      )
      .then(
        (result) => {
          toast({
            title: `Message Sent`,
            status: "success",
            description: "We will get back to you shortly.",
            isClosable: true,
          });

          setSendingMessage(false);
        },
        (error) => {
          toast({
            title: `Message Couldn't be Sent`,
            status: "error",
            description: "An error occurred, Please try again.",
            isClosable: true,
          });
          setSendingMessage(false);
        }
      );
  };
  return (
    <Stack flex="1" paddingLeft="150px">
      <Flex direction="column" gap="120px">
        <Box display="flex" marginTop="70px" justifyContent="center">
          <Heading size="3xl" color="white" fontWeight="800" lineHeight={0.1}>
            GET IN <span style={{ color: "#ffb400" }}>TOUCH</span>
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
            CONTACT
          </span>
        </Box>
        <Box flex="0 0 45%">
          <Flex justify="space-between" align="flex-start">
            <Box flex="0 0 30%">
              <Heading size="lg" fontWeight="500" mt={2} mb={2}>
                DON'T BE SHY !
              </Heading>
              <Text style={{ opacity: 0.8, fontSize: "16px" }}>
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </Text>
              <Flex direction="column" mt={10}>
                <Flex align="center" mb={10}>
                  <MapIcon style={{ color: "#ffb400", fontSize: "40px" }} />
                  <Flex direction="column" ml={4}>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      style={{ opacity: 0.8 }}
                    >
                      ADDRESS POINT
                    </Text>
                    <Text fontSize="16px" fontWeight="500">
                      Bharatpur-12, Chitwan, Nepal
                    </Text>
                  </Flex>
                </Flex>
                <Flex align="center" mb={10}>
                  <ContactMailIcon
                    style={{ color: "#ffb400", fontSize: "35px" }}
                  />
                  <Flex direction="column" ml={4}>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      style={{ opacity: 0.8 }}
                    >
                      MAIL ME
                    </Text>
                    <Text fontSize="16px" fontWeight="500">
                      iamprazol@gmail.com
                    </Text>
                  </Flex>
                </Flex>
                <Flex align="center" mb={10}>
                  <ContactPhoneIcon
                    style={{ color: "#ffb400", fontSize: "35px" }}
                  />
                  <Flex direction="column" ml={4}>
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      style={{ opacity: 0.8 }}
                    >
                      CALL ME
                    </Text>
                    <Text fontSize="16px" fontWeight="500">
                      +9779845690436
                    </Text>
                  </Flex>
                </Flex>
                <Flex align="center" mb={10}>
                  <Link href="https://github.com/iamprazol" isExternal>
                    <GitHubIcon
                      style={{ color: "whitesmoke", fontSize: "35px" }}
                    />
                  </Link>
                  <Link href="https://www.facebook.com/iamprazol" isExternal>
                    <FacebookIcon
                      style={{ color: "whitesmoke", fontSize: "35px" }}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/prajjwal-poudel-980861178/"
                    isExternal
                  >
                    <LinkedInIcon
                      style={{ color: "whitesmoke", fontSize: "35px" }}
                    />
                  </Link>
                  <Link href="https://instagram.com/iamprazzol" isExternal>
                    <InstagramIcon
                      style={{ color: "whitesmoke", fontSize: "35px" }}
                    />
                  </Link>
                </Flex>
              </Flex>
            </Box>
            <Box flex="0 0 60%">
              <form ref={form} onSubmit={handleSubmit}>
                <Flex direction="column" gap={8}>
                  <Flex justify="space-between">
                    <Input
                      flex="0 0 48%"
                      id="name"
                      type="text"
                      placeholder="YOUR NAME"
                      borderRadius="20px"
                      background="#2b2a2a"
                      border="none"
                      color="white"
                      name="user_name"
                    />
                    <Input
                      flex="0 0 48%"
                      id="email"
                      type="email"
                      placeholder="YOUR EMAIL"
                      borderRadius="20px"
                      background="#2b2a2a"
                      border="none"
                      color="white"
                      name="user_email"
                    />
                  </Flex>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="YOUR SUBJECT"
                    borderRadius="20px"
                    background="#2b2a2a"
                    border="none"
                    color="white"
                  />
                  <Textarea
                    id="subject"
                    type="text"
                    placeholder="YOUR MESSAGE"
                    rows={10}
                    borderRadius="20px"
                    background="#2b2a2a"
                    border="none"
                    color="white"
                    name={"message"}
                  />
                </Flex>
                <Button
                  isLoading={sendingMessage}
                  mt={10}
                  borderRadius="20px"
                  color="#ffb400"
                  fontWeight={500}
                  height="60px"
                  width="30%"
                  borderColor="#ffb400"
                  variant="outline"
                  rightIcon={<SendIcon />}
                  type={"submit"}
                  loadingText="Sending"
                  spinnerPlacement="start"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
};

export default Contact;
