"use server";

import { getStoryblokApi } from "@storyblok/react/rsc";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchStoryblokStory({
  slug,
  version = "draft",
}: {
  slug: string | string[];
  version?: "draft" | "published";
}) {
  noStore();

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, { version: version });
}
