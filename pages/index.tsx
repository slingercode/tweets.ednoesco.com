import { Stack } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Tweet from "../components/tweet.component";

import { ServerResponseType } from "../types/response";

const Home: NextPage<ServerResponseType> = ({ tweets }) => {
  return (
    <Stack
      spacing={4}
      paddingY={[4, 14]}
      paddingX={{ base: 4, md: 28, lg: 56, xl: 96 }}
    >
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </Stack>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<ServerResponseType> = async () => {
  try {
    const response = await fetch(process.env.API_URL!, {
      method: "POST",
      body: JSON.stringify([
        "1509045938890887168",
        "1423433602142986245",
        "1451004781154078725",
      ]),
      headers: {
        authorization: `Bearer ${process.env.API_TOKEN!}`,
      },
    });

    const data: ServerResponseType = await response.json();

    if (data.status !== 200) {
      throw new Error(data.message);
    }

    return {
      props: data,
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: { tweets: [], errors: [], message: "", status: 500 },
    };
  }
};
