import { PageStoryblok } from "../../../../component-types-sb";
import { storyblokEditable } from "@storyblok/react";
import { StoryblokComponent } from "@storyblok/react/rsc";

export default function StoryblokPage({ blok }: { blok: PageStoryblok }) {
  console.log("STORYBLOK_PAGE", blok);

  return (
    <div {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
