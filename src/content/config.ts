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

export const collections = {
	blog: blogCollection,
};
