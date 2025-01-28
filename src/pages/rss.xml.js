// import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const post = await getCollection("blog");
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
