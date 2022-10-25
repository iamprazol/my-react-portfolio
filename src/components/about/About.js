import React, { useEffect } from "react";
import {
  Box,
  Heading,
  Flex,
  Stack,
  Text,
  List,
  ListItem,
  UnorderedList,
  Link,
  Image,
  Badge,
} from "@chakra-ui/react";
import IconContainer from "../common/IconContainer";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import useWindowDimensions from "../helper/useWindowDimensions";

const About = () => {
  const BadgeIcon = ({ icon }) => {
    return (
      <Flex
        direction="column"
        flex="0 0 10%"
        alignItems="center"
        mr={3}
        maxHeight="100%"
      >
        <IconContainer icon={icon} size="small" isActive={true} />
        <span
          style={{
            height: useWindowDimensions().width > "1024" ? "100%" : "78%",
            width: "1px",
            borderRadius: "10px",
            background: "white",
            position: "relative",
            opacity: 0.2,
          }}
        ></span>
      </Flex>
    );
  };

  const TimeLineBadge = ({ badgeText }) => {
    return (
      <Badge
        fontWeight="600"
        mb="12px"
        style={{
          opacity: 0.8,
          borderRadius: "20px",
          textAlign: "center",
          padding: "1px 10px",
          width: "125px",
        }}
      >
        {badgeText}
      </Badge>
    );
  };

  return (
    <Stack flex="1" paddingLeft={{ base: "0px", lg: "150px" }}>
      <Flex direction="column" gap="120px">
        <Box display="flex" marginTop="70px" justifyContent="center">
          <Heading size="3xl" color="white" fontWeight="800">
            ABOUT <span style={{ color: "#ffb400" }}>ME</span>
          </Heading>
          <span
            style={{
              fontSize: useWindowDimensions().width > "425" ? "110px" : "50px",
              letterSpacing: "10px",
              lineHeight: "0.7",
              position: "absolute",
              left: useWindowDimensions().width > "1024" ? "38%" : "17%",
              top: useWindowDimensions().width > "1024" ? "6.5%" : "6.8%",
              textTransform: "uppercase",
              fontWeight: "800",
              transform: "translateY(-50%)",
              color: "hsla(0,0%,100%,.07)",
            }}
          >
            RESUME
          </span>
        </Box>
        <Flex
          direction={{
            base: "column",
            "2xl": "row",
            xl: "row",
            lg: "row",
            md: "column",
            sm: "column",
          }}
          align="center"
          justify="space-between"
          gap={{
            base: "25px",
            "2xl": "0px",
            xl: "0px",
            lg: "0px",
            md: "25px",
            sm: "25px",
          }}
        >
          <Box flex="0 0 50%">
            <Heading
              size="lg"
              color="white"
              mb={5}
              textAlign={{
                base: "center",
                "2xl": "left",
                xl: "left",
                lg: "left",
                md: "center",
                sm: "center",
              }}
            >
              PERSONAL INFOS
            </Heading>
            <Flex
              justify="space-between"
              align="center"
              gap={{
                base: "20px",
                "2xl": "0px",
                xl: "0px",
                lg: "0px",
                md: "100px",
                sm: "50px",
              }}
            >
              <Flex direction="column">
                <Text
                  fontWeight="500"
                  fontSize={
                    useWindowDimensions().width > "425" ? "16px" : "12px"
                  }
                >
                  <List spacing={5}>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>First Name:</span> Prajjwal
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Age:</span> 26
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Freelance:</span> Available
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Email:</span>{" "}
                      iamprazol@gmail.com
                    </ListItem>
                  </List>
                </Text>
              </Flex>
              <Flex direction="column">
                <Text
                  fontWeight="500"
                  fontSize={
                    useWindowDimensions().width > "425" ? "16px" : "12px"
                  }
                >
                  <List spacing={5}>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Last Name:</span> Poudel
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Nationality:</span> Nepali
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Address:</span>{" "}
                      Bharatpur-12, Nepal
                    </ListItem>
                    <ListItem>
                      <span style={{ opacity: 0.8 }}>Phone:</span>{" "}
                      +9779850690436
                    </ListItem>
                  </List>
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Flex align="center">
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                display="flex"
                alignItems="center"
                flexDirection="column"
                p={8}
                mr={8}
              >
                <Heading
                  size={useWindowDimensions().width > "425" ? "3xk" : "xl"}
                  color="#ffb400"
                >
                  4<Text as="sup">+</Text>
                </Heading>
                <Text fontWeight="500">- YEARS OF EXPERIENCE</Text>
              </Box>
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                display="flex"
                alignItems="center"
                flexDirection="column"
                p={8}
              >
                <Heading
                  size={useWindowDimensions().width > "425" ? "3xk" : "xl"}
                  color="#ffb400"
                >
                  17<Text as="sup">+</Text>
                </Heading>
                <Text fontWeight="500">- PERSONAL PROJECTS </Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Box flex="0 0 50%">
          <Flex justify="center">
            <Heading size="lg" color="white" mb={10}>
              MY SKILLS
            </Heading>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            flexWrap={"wrap"}
            justifyContent={"space-around"}
            flexDirection={{
              base: "column",
              "2xl": "row",
              xl: "row",
              lg: "row",
              md: "column",
              sm: "column",
            }}
            gap={{
              base: "25px",
              "2xl": "0px",
              xl: "0px",
              lg: "0px",
              md: "25px",
              sm: "25px",
            }}
          >
            <Box flex="0 0 50%">
              <Link href="https://github.com/iamprazol">
                <Image
                  align="center"
                  src="https://github-readme-stats.vercel.app/api?username=iamprazol&count_private=true&show_icons=true&include_all_commits=true&line_height=24&theme=gruvbox"
                />
              </Link>
            </Box>
            <Box flex="0 0 50%">
              <Link href="https://github.com/iamprazol">
                <Image
                  align="center"
                  src="https://github-readme-streak-stats.herokuapp.com/?user=iamprazol&theme=gruvbox"
                />
              </Link>
            </Box>
            <Box
              flex="0 0 50%"
              mt={{
                base: "0px",
                "2xl": "10px",
                xl: "10px",
                lg: "10px",
                md: "0px",
                sm: "0px",
              }}
            >
              <Link href="https://github.com/iamprazol">
                <Image
                  align="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=iamprazol&theme=gruvbox&layout=compact&langs_count=8"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
        <Box flex="0 0 50%">
          <Flex justify="center" mb={10}>
            <Heading size="lg" color="white">
              {useWindowDimensions().width > "1024"
                ? `EXPERIENCE & EDUCATION`
                : `EXPERIENCE`}
            </Heading>
          </Flex>
          <Flex justify="space-between" align="center">
            <Flex
              flexDirection={{
                base: "column",
                "2xl": "row",
                xl: "row",
                lg: "column",
                md: "column",
                sm: "column",
              }}
            >
              <Flex gap={10} direction="column">
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0rem",
                    xl: "0rem",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<BusinessCenterIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2019 - PRESENT" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        WP PLUGIN TEAM LEAD -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        THEMEGRILL
                      </Heading>
                    </Flex>
                    <UnorderedList
                      spacing={2}
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                      color="white"
                    >
                      <ListItem>
                        As a Team lead of User Registration and Everest Forms
                        plugin collaborate with the team to list out the task to
                        perform in our next release along with deadline.
                      </ListItem>
                      <ListItem>
                        Perform competitor analysis, extract features,
                        enhancements and bug fixes request from clients, help in
                        planning and making decisions related to company as a
                        whole.
                      </ListItem>
                      <ListItem>
                        Interview and select candidates suitable for the company
                        and team.
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0rem",
                    xl: "0rem",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<BusinessCenterIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2019 - 2020" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        WP PLUGIN DEVELOPER -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        THEMEGRILL
                      </Heading>
                    </Flex>
                    <UnorderedList
                      spacing={2}
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                      color="white"
                    >
                      <ListItem>
                        Working on fixes, enhancement and features that help
                        make the product better.
                      </ListItem>
                      <ListItem>
                        Helping junior developers and interns in completing
                        their task with proper guidance.
                      </ListItem>
                      <ListItem>
                        Collaborating with support team to provide best support
                        to our clients.
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0rem",
                    xl: "0rem",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<BusinessCenterIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2018 - 2019" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        PHP WEB DEVELOPER -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        INFOMAX
                      </Heading>
                    </Flex>
                    <UnorderedList
                      spacing={2}
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                      color="white"
                    >
                      <ListItem>
                        During the course of my employment at infomax i had some
                        experience in developing web applications as well as
                        developing web API for mobile applications by being a
                        back-end developer in a team of tech enthusiasts.
                      </ListItem>
                      <ListItem>
                        My day to day activities were working in team with front
                        end developers, developing web Api in laravel for mobile
                        applications and web applications and providing daily
                        report about tasks performed.
                      </ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
              </Flex>
              <Flex gap={10} direction="column">
                {useWindowDimensions().width <= "1024" && (
                  <Flex justify="center" mb={10} mt={20}>
                    <Heading size="lg" color="white">
                      EDUCATION
                    </Heading>
                  </Flex>
                )}
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0px",
                    xl: "0px",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<MenuBookIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2015 - 2019" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        BACHLEORS IN COMPUTER ENGINEERING -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        WRC
                      </Heading>
                    </Flex>
                    <Text
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                    >
                      From Western Regional Campus ( Pashchimanchal Engineering
                      Campus ), Lamachaur-16, Pokhara, I completed my Bachleor
                      in computer engineering degree.
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0rem",
                    xl: "0rem",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<MenuBookIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2013 - 2015" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        HIGHER SECONDARY -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        AROMA
                      </Heading>
                    </Flex>
                    <Text
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                    >
                      From Aroma College Of Applied Science And Management,
                      Bharatpur-10, Chitwan, I completed my Higher secondary
                      degree.
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  direction="row"
                  mt={{
                    base: "2.5rem",
                    "2xl": "0rem",
                    xl: "0rem",
                    lg: "2.5rem",
                    md: "2.5rem",
                    sm: "2.5rem",
                  }}
                  height="60vh"
                >
                  <BadgeIcon
                    icon={<MenuBookIcon style={{ color: "white" }} />}
                  />
                  <Flex direction="column" flex="0 0 90%">
                    <TimeLineBadge badgeText="2001 - 2012" />
                    <Flex align="baseline">
                      <Heading
                        fontSize={
                          useWindowDimensions().width > "425" ? "18px" : "14px"
                        }
                        fontWeight="500"
                        mt={2}
                        mb={2}
                      >
                        PRIMARY -
                      </Heading>
                      <Heading
                        size="sm"
                        fontWeight="600"
                        style={{ opacity: 0.8 }}
                        ml={1}
                      >
                        HILL BIRD
                      </Heading>
                    </Flex>
                    <Text
                      style={{
                        opacity: 0.8,
                        fontSize:
                          useWindowDimensions().width > "425" ? "14px" : "10px",
                      }}
                    >
                      From Hill Bird, Bharatpur-12, Chitwan, I completed my
                      primary education degree.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
};

export default About;
