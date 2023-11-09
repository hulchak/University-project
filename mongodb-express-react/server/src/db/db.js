import dotenv from "dotenv";
import {MongoClient} from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URL);
const connection = await client.connect();
const database = connection.db("example");

export default database;