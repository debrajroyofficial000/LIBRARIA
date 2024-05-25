import { Client, Databases, Account } from "appwrite";
const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_PROJECT_ENDPOINT)
  .setProject(import.meta.env.VITE_PROJECT_ID);

const db = new Databases(client);
const acc = new Account(client);
export { db, acc };
