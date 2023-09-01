// import sanityClient from "@sanity/client";
// import imageBuilder from "@sanity/image-url";

// const client = sanityClient({
//   projectId: "u36w92yy",
//   dataset: "production",
//   useCdn: true,
//   apiVersion: "2021-10-21",
// });
// const builder = imageBuilder(client);

// export const urlFor = (source) => builder.image(source);

// export default client;

// sanity.js
// sanity.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  projectId: "u36w92yy",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
};

const client = createClient(config);

// Create an instance of the image builder
const builder = imageUrlBuilder(client);

// Define the base URL for your images (you can adjust this to match your Sanity configuration)
const baseUrl = "https://cdn.sanity.io";

export const urlFor = (source) => builder.image(source).url({ baseUrl });

export default client;
