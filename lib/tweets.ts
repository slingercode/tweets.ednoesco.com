import { Tweet } from "~/types/tweet";

const ids = "1509045938890887168,1423433602142986245,1451004781154078725";

export async function getTweets(): Promise<Tweet[] | string> {
  const { API_URL, API_TOKEN } = process.env;

  if (API_URL === undefined || API_TOKEN === undefined) {
    return "Bad request";
  }

  const url = new URL(API_URL);
  url.searchParams.set("ids", ids);

  const response = await fetch(url, {
    next: { revalidate: 60 },
    headers: { Authorization: API_TOKEN },
  });

  return response.json();
}
