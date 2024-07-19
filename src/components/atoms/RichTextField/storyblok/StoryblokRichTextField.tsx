"use client";

import useRichTextField from "@/components/atoms/RichTextField/hooks/useRichTextField";
import { RichtextFieldStoryblok } from "../../../../../component-types-sb";

export default function StoryblokRichTextField({
  blok,
}: {
  blok: RichtextFieldStoryblok | undefined;
}) {
  const content = useRichTextField({ blok });
  return <div>{content}</div>;
}
