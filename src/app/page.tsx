import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function HomePage() {
  const { data } = await fetchStoryblokStory({ slug: "home" });

  return <StoryblokComponent blok={data.story.content} />;
}
