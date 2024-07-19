import Link from "next/link";
import { MARK_LINK, render } from "storyblok-rich-text-react-renderer";
import { RichtextFieldStoryblok } from "../../../../../component-types-sb";

export default function useRichTextField({
  blok,
}: {
  blok: RichtextFieldStoryblok | undefined;
}) {
  if (blok === undefined) return null;

  return render(blok.richtext, {
    markResolvers: {
      [MARK_LINK]: (children, props) => {
        const { linktype, href, target } = props;

        if (linktype === "email") {
          return <a href={`mailto:${href}`}>{children}</a>;
        }

        if (href && href.match(/^(https?:)?\/\//)) {
          return (
            <a href={href} target={target}>
              {children}
            </a>
          );
        }

        return (
          <Link href={href ?? "/"} prefetch>
            {children}
          </Link>
        );
      },
    },
  });
}
