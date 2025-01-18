import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

export const connectdb = async () => {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db();
  return db;
};
