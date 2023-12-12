/** @format */

import slugify from "slugify";
export const altSlug = (slug) => {
  return slugify(slug, {
    replacement: "-",
    lower: true,
    strict: false,
    locale: "vi",
    trim: true,
  });
};
