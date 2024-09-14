import { createClient } from 'microcms-js-sdk';

console.log('Service ID:', process.env.SERVICE_ID);
console.log('API Key:', process.env.API_KEY);

export const MyClient = createClient({
  serviceDomain: process.env.SERVICE_ID || "",
  apiKey: process.env.API_KEY || "",
});