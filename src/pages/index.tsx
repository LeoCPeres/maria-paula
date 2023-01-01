import Head from "next/head";
import { Flex, Box, Button, Text } from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const whichStageText = (stage: number) =>
  ({
    1: ["Oi, gatinha. Tudo bem? O Léo me mandou te entregar esse recado :)"],
    2: ["Ele disse que gostou muito do último encontro..."],
    3: ["E quer muito te ver de novo."],
    4: ["Para isso, ele preparou algumas opções para você escolher."],
    5: [
      "Mas antes... Ele precisa saber se você topa sair com ele no próximo final de semana.",
    ],
    6: ["E aí, topa?"],
    7: ["Que bom que você fez a escolha certa :)"],
    99: ["Você cancelou a ligação do Stitch :("],
  }[stage] as [""]);

const whichStageImage = (stage: number) =>
  ({
    0: "https://media.tenor.com/eAUe8lKjTh8AAAAM/boa-noite.gif",
    1: "https://media.tenor.com/EA66aDVI4H4AAAAM/lilo-and-stitch-waving.gif",
    2: "https://media.tenor.com/h1qbqS7iQxIAAAAi/stitch-hide.gif",
    3: "https://media.tenor.com/h1qbqS7iQxIAAAAi/stitch-hide.gif",
    4: "https://i.pinimg.com/originals/fe/d2/9e/fed29ea1fe4260d12130c07741b326df.gif",
    5: "https://media.tenor.com/CodoZtZolJwAAAAC/stitch.gif",
    6: "https://media.tenor.com/CodoZtZolJwAAAAC/stitch.gif",
    7: "https://media.tenor.com/c_tVFX3CxuIAAAAC/stitch-cheer.gif",
    99: "https://www.gifcen.com/wp-content/uploads/2022/09/stitch-gif-12.gif",
  }[stage] as string);

export default function Home() {
  const [text, setText] = useState([
    "Você está recebendo uma ligação do Stitch...",
  ]);
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  const [screenSize, setScreenSize] = useState(0);

  function changeText() {
    setStage(stage + 1);
    setVisible(false);
    setText(whichStageText(stage + 1));
    if (stage + 1 == 6) {
      setIsQuestion(true);
    } else {
      setIsQuestion(false);
    }
  }

  function cancelCall() {
    setStage(99);
    setVisible(false);
    setText(whichStageText(99));
    setIsQuestion(false);
  }

  useEffect(() => {
    if (text == null) return;
    setScreenSize(window.innerWidth);

    if (stage == 99) return;

    const timer = text[0].length * 70;
    if (stage == 0) {
      setIsQuestion(true);
    }
    setTimeout(() => {
      setVisible(true);
    }, timer);

    // if (stage == 99) {
    //   setTimeout(() => {
    //     setVisible(false);
    //     setStage(0);
    //   }, 15000);
    // }
  }, [stage]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex
        w="100%"
        h="100vh"
        align="center"
        justify="center"
        direction={["column", "row"]}
      >
        <Box h="300px" mr={["0px", "1rem"]} mb={["2rem", "0px"]}>
          <img src={whichStageImage(stage)} alt="" width="300px" />
        </Box>
        <Flex w="300px" h="230px" direction="column">
          <Box
            fontFamily={"JetBrains Mono"}
            className={
              screenSize <= 896 ? "bubble grow top" : "bubble grow left"
            }
            h="50%"
          >
            {stage === 0 ? (
              <Typewriter words={text} cursor typeSpeed={60} cursorStyle="|" />
            ) : stage === 1 ? (
              <>
                <Text display="none">{stage}</Text>
                <Typewriter
                  words={text}
                  cursor
                  typeSpeed={60}
                  cursorStyle="|"
                />
              </>
            ) : stage === 2 ? (
              <>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 3 ? (
              <>
                <Text display="none">{stage}</Text>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 4 ? (
              <>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 5 ? (
              <>
                <Text display="none">{stage}</Text>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 6 ? (
              <>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 7 ? (
              <>
                <Text display="none">{stage}</Text>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : stage === 99 ? (
              <>
                <p style={{ display: "none" }}>{"oi"}</p>
                <Typewriter
                  words={text}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                />
              </>
            ) : (
              ""
            )}
          </Box>
          {isQuestion == false && visible == true ? (
            <Button mt="2rem" onClick={changeText}>
              Continuar
            </Button>
          ) : isQuestion == true && visible == true && stage != 0 ? (
            <Flex gap="1rem" mt="2rem" direction={["column-reverse", "row"]}>
              <Button colorScheme="red" w={["100%", "40%"]} disabled>
                Não :(
              </Button>
              <Button
                colorScheme="green"
                w={["100%", "60%"]}
                onClick={changeText}
              >
                Sim, topo muito :)
              </Button>
            </Flex>
          ) : isQuestion == true && visible == true && stage == 0 ? (
            <Flex gap="1rem" mt="2rem" direction={["column-reverse", "row"]}>
              <Button
                colorScheme="red"
                w={["100%", "40%"]}
                onClick={cancelCall}
              >
                Recusar
              </Button>
              <Button
                colorScheme="green"
                w={["100%", "60%"]}
                onClick={changeText}
              >
                Atender
              </Button>
            </Flex>
          ) : (
            ""
          )}
        </Flex>
      </Flex>
    </>
  );
}
