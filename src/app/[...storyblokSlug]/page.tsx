import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function Page({
  params,
}: {
  params: { storyblokSlug: string[] };
}) {
  const { data } = await fetchStoryblokStory({
    slug: params.storyblokSlug.join(""),
  });

  return <StoryblokComponent blok={data.story.content} />;
}
