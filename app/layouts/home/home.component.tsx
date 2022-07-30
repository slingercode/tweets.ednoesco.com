import { Stack } from "@chakra-ui/react";
import { useLoaderData } from "@remix-run/react";

import Tweet from "~/components/tweet.component";
import type { LoaderData } from "./home.server";

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <Stack
      spacing={4}
      paddingY={[4, 14]}
      paddingX={{ base: 4, md: 28, lg: 56, xl: 96 }}
    >
      {data.tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
}
