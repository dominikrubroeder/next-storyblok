import {StoryblokStory} from 'storyblok-generate-ts'

export interface PageStoryblok {
  body?: (PageStoryblok | RichtextFieldStoryblok)[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}

export interface RichtextFieldStoryblok {
  richtext: RichtextStoryblok;
  _uid: string;
  component: "richtext_field";
  [k: string]: any;
}
