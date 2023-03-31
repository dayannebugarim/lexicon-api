import { MongoClient as Mongo, Db, Collection, Document } from 'mongodb';

export const MongoClient = {
    client: undefined as unknown as Mongo,
    db: undefined as unknown as Db,
    collection: undefined as unknown as Collection<Document>,

    async connect(): Promise<void> {
        const url = process.env.MONGODB_URL || "localhost:27017";
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;

        const client = new Mongo(url, { auth: { username, password }});
        const db = client.db(process.env.MONGODB_DATABASE);
        const collection = db.collection(process.env.MONGODB_COLLECTION || 'words');
        
        this.client = client;
        this.db = db;
        this.collection = collection;

        console.log("Connected to MongoDB!");
    }
};