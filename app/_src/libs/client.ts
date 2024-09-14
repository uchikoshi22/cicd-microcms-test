import { createClient } from 'microcms-js-sdk';

console.log('Service ID:', process.env.MICROCMS_SERVICE_DOMAIN);
console.log('API Key:', process.env.API_KEY);

export const MyClient = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});