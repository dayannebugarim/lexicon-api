import { config } from "dotenv";
import { Collection, Db, InsertManyResult } from "mongodb";
import { dataFormatting } from "./dataFormatting";
import { MongoClient } from "./mongo";

config();

export const wordsInsertion = async (): Promise<void> => {
    try {
        const data = await dataFormatting();
        const db: Db = MongoClient.db;
        const wordsCollection: Collection = db.collection('words');
        
        const documentExists = await wordsCollection.findOne(data[0]); 

        if (!documentExists) {
            const result: InsertManyResult<Document> = await wordsCollection.insertMany(data);
            console.log(`Inserted Count: ${result.insertedCount}`); 
        }
        console.log('Exists!');
    } catch (err) {
        console.log(err);
    }
}