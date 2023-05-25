import { Tweet } from "~/components/tweet";
import { getTweets } from "~/lib/tweets";

export default async function Index() {
  const tweets = await getTweets();

  if (typeof tweets === "string") {
    return <div>Error</div>;
  }

  return (
    <main className="grid gap-5">
      {tweets.map((tweet) => (
        <Tweet key={`tweet-${tweet.id}`} tweet={tweet} />
      ))}
    </main>
  );
}
