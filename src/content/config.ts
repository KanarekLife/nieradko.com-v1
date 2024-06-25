import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tags: z.array(z.string()).default([]),
			created: z.coerce.date(),
			draft: z.boolean().default(true),
			image: z
				.object({
					src: image(),
					alt: z.string(),
				})
				.optional(),
			excerpt: z.string()
		}),
});

const pagesCollection = defineCollection({
	type: 'content',
	schema: ({image}) =>
		z.object({
			image: z
			.object({
				src: image(),
				alt: z.string(),
			})
			.optional(),
		})
});

export const collections = {
	blog: blogCollection,
	pages: pagesCollection
};
