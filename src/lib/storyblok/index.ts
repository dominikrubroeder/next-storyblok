"use server";

import { getStoryblokApi } from "@storyblok/react";

export async function fetchStoryblokStory({
  slug,
  version = "draft",
}: {
  slug: string | string[];
  version?: "draft" | "published";
}) {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, { version: version });
}
