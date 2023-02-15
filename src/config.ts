// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "YLin";
export const SITE_DESCRIPTION =
  "Welcome to my blog! I record LeetCode grinding.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Yuxuan Lin";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
