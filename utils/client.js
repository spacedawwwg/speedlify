const sanityClient = require('@sanity/client');

require('dotenv').config();

module.exports = sanityClient({
  projectId: process.env.PUBLIC_SANITY_PROJECTID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.PRIVATE_SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
