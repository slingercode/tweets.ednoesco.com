import Image from "next/image";
import { Fragment, ReactElement } from "react";
import { Tweet, TweetMediaV2 } from "~/types/tweet";

export function Tweet({ tweet }: { tweet: Tweet }): ReactElement {
  const convertMS = ({ duration_ms = 0 }: TweetMediaV2) => {
    const minutes = Math.floor(duration_ms / 60000);
    const seconds = Math.trunc((duration_ms % 60000) / 1000);

    return seconds === 60
      ? `${minutes + 1}:00`
      : `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const metricsFormatter = (value: number): string => {
    if (value === 0) {
      return "0";
    }

    const formatter = new Intl.NumberFormat("en", { maximumFractionDigits: 1 });
    const log = Math.trunc(Math.log10(value));

    if (log >= 3 && log <= 5) {
      return `${formatter.format(value / 1000)}k`;
    } else if (log >= 6) {
      return `${formatter.format(value / 1_000_000)}M`;
    } else {
      return formatter.format(value);
    }
  };

  return (
    <div className="border md:border-2 border-ednoesco-accent-border rounded-sm p-3">
      <div className="flex">
        <Image
          className="rounded-full"
          width={48}
          height={48}
          alt={tweet.author.username}
          src={tweet.author.profile_image_url}
        />

        <div className="ml-3">
          <div className="flex items-center">
            <p className="text-lg">{tweet.author.name}</p>

            {tweet.author.verified && (
              <span className="ml-3 cursor-default">✅</span>
            )}
          </div>

          <p className="text-sm text-ednoesco-accent-high">
            @{tweet.author.username}
          </p>
        </div>
      </div>

      <p className="py-3">{tweet.text}</p>

      {!!tweet.attachments.length && (
        <div className="relative">
          {tweet.attachments.map((attachment) => (
            <Fragment
              key={`tweet-${tweet.id}-attachment-${attachment.media_key}`}
            >
              {attachment.type === "photo" && (
                <Image
                  className="mx-auto rounded-sm"
                  alt={attachment.media_key}
                  src={attachment.url!}
                  width={attachment.width}
                  height={attachment.height}
                />
              )}

              {attachment.type === "video" && (
                <>
                  <Image
                    className="mx-auto rounded-sm"
                    alt={attachment.media_key}
                    src={attachment.preview_image_url!}
                    width={attachment.width}
                    height={attachment.height}
                  />

                  <div className="absolute top-1/2 left-1/2 rounded-full bg-white text-ednoesco-accent-low -translate-x-1/2 -translate-y-1/2">
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
                  </div>

                  <div className="absolute bottom-2 right-2 bg-gray-900 opacity-70 text-sm px-[0.37rem] py rounded-md">
                    {convertMS(attachment)}
                  </div>
                </>
              )}
            </Fragment>
          ))}
        </div>
      )}

      {!!tweet.referenced_tweets.length && (
        <div className="px-10 pt-3">
          {tweet.referenced_tweets.map((referencedTweet) => (
            <p
              key={`tweet-${tweet.id}-referenced-tweet-${referencedTweet.id}`}
              className="text-sm italic"
            >
              {referencedTweet.text}
            </p>
          ))}
        </div>
      )}

      <div className="flex justify-around pt-5 text-sm">
        <p>{`likes ${metricsFormatter(tweet.public_metrics.like_count)}`}</p>
        <p>{`retweet ${metricsFormatter(
          tweet.public_metrics.retweet_count
        )}`}</p>
        <p>{`reply ${metricsFormatter(tweet.public_metrics.reply_count)}`}</p>
        <p>{`quote ${metricsFormatter(tweet.public_metrics.quote_count)}`}</p>
      </div>
    </div>
  );
}
