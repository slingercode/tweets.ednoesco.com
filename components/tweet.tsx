import Image from "next/image";
import { ReactElement } from "react";
import { Tweet } from "~/types/tweet";

export function Tweet({ tweet }: { tweet: Tweet }): ReactElement {
  return (
    <div className="border-2 border-ednoesco-accent rounded-sm p-3">
      <div className="flex">
        <Image
          className="rounded-full"
          alt={tweet.author.username}
          src={tweet.author.profile_image_url}
          width={48}
          height={48}
        />

        <div className="ml-3">
          <div className="flex items-center">
            <p className="text-lg">{tweet.author.name}</p>

            {tweet.author.verified && <span className="ml-3">✅</span>}
          </div>

          <p className="text-sm">@{tweet.author.username}</p>
        </div>
      </div>

      <p className="py-3">{tweet.text}</p>

      <div>
        {tweet.attachments.map((attachment) => (
          <>
            {attachment.type === "photo" && (
              <Image
                className="mx-auto rounded-xs"
                key={`${tweet.id}-attachment-${attachment.media_key}`}
                alt={attachment.media_key}
                src={attachment.url!}
                width={attachment.width}
                height={attachment.height}
              />
            )}

            {attachment.type === "video" && (
              <Image
                className="mx-auto rounded-xs"
                key={`${tweet.id}-attachment-${attachment.media_key}`}
                alt={attachment.media_key}
                src={attachment.preview_image_url!}
                width={attachment.width}
                height={attachment.height}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
