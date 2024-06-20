import { fetchStoryblokStory } from "@/lib/storyblok";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default async function Home() {
  const { data } = await fetchStoryblokStory({ slug: "home" });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}
