import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/future/image";

import { TweetType } from "../types/tweet";

const Media: React.FC<{ tweet: TweetType }> = ({ tweet }) => {
  const media = tweet.media[0];

  const validateMediaType = () =>
    media.type === "video" || media.type === "animated_gif";

  const getURL = () => {
    if (media.type === "photo") {
      return media.url;
    } else {
      return media.preview_image_url;
    }
  };

  const convertMS = () => {
    const minutes = Math.floor(media.duration_ms / 60000);
    const seconds = Math.trunc((media.duration_ms % 60000) / 1000);

    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Flex position="relative" justifyContent="center">
      <Image
        priority
        src={getURL()}
        alt="Image of tweet"
        width={media.width}
        height={media.height}
        style={{ borderRadius: "4px" }}
      />

      {validateMediaType() && (
        <Box
          top="50%"
          left="50%"
          color="yellow.low"
          position="absolute"
          borderRadius="full"
          backgroundColor="white"
          transform="translate(-50%, -50%)"
        >
          <svg
            width={60}
            height={60}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            />
          </svg>
        </Box>
      )}

      {media.duration_ms && (
        <Badge bottom={2.5} left={2.5} position="absolute">
          {convertMS()}
        </Badge>
      )}
    </Flex>
  );
};

const Tweet: React.FC<{ tweet: TweetType }> = ({ tweet }) => {
  return (
    <Stack
      spacing={3}
      padding={2.5}
      borderRadius="md"
      borderWidth="thin"
      borderStyle="solid"
      borderColor="yellow.high"
    >
      <Stack direction="row">
        <Image
          width={50}
          height={50}
          alt="Profile pic"
          style={{ borderRadius: "50%" }}
          src={tweet.author.profile_image_url}
        />

        <Stack spacing={0.5} justifyContent="center">
          <Heading as="h1" size="md">
            {tweet.author.name}
          </Heading>

          <Text color="yellow.high">{`@${tweet.author.username}`}</Text>
        </Stack>
      </Stack>

      <Text>{tweet.text}</Text>

      {!!tweet.media.length && <Media tweet={tweet} />}
    </Stack>
  );
};

export default Tweet;
