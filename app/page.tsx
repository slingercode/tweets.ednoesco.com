import { getTweets } from "~/lib/tweets";

export default async function Index() {
  const tweets = await getTweets();

  if (typeof tweets === "string") {
    return <div>Error</div>;
  }

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>{JSON.stringify(tweet)}</div>
      ))}
    </div>
  );
}
