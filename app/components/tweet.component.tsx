import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import type { TweetType } from "~/types/tweet";

const Tweet: React.FC<{ tweet: TweetType }> = ({ tweet }) => {
  const validateMediaType = () =>
    tweet.media[0].type === "video" || tweet.media[0].type === "animated_gif";

  const getURL = () => {
    if (tweet.media[0].type === "photo") {
      return tweet.media[0].url;
    } else {
      return tweet.media[0].preview_image_url;
    }
  };

  const convertMS = () => {
    const minutes = Math.floor(tweet.media[0].duration_ms / 60000);
    const seconds = Math.trunc((tweet.media[0].duration_ms % 60000) / 1000);

    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Stack
      spacing={3}
      padding={2.5}
      borderRadius="md"
      borderWidth="thin"
      borderStyle="solid"
      borderColor="blue.300"
    >
      <Stack direction="row">
        <Image
          alt=""
          src={tweet.author.profile_image_url}
          width={50}
          height={50}
          borderRadius="full"
        />

        <Stack spacing={0.5} justifyContent="center">
          <Heading as="h1" size="md">
            {tweet.author.name}
          </Heading>

          <Text color="blue.400">{`@${tweet.author.username}`}</Text>
        </Stack>
      </Stack>

      <Text>{tweet.text}</Text>

      {!!tweet.media.length && (
        <Flex position="relative" justifyContent="center">
          <Image
            borderRadius="md"
            alt="Image of tweet"
            width={tweet.media[0].width}
            src={getURL()}
          />

          {validateMediaType() && (
            <Box
              top="50%"
              left="50%"
              color="blue.400"
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

          {tweet.media[0] && tweet.media[0].duration_ms && (
            <Badge bottom={4} left={4} position="absolute">
              {convertMS()}
            </Badge>
          )}
        </Flex>
      )}
    </Stack>
  );
};

export default Tweet;
