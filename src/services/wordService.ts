import { MongoClient } from './../database/mongo';
import { Document, WithId } from 'mongodb';


export const wordService = {
    randomWord: async (): Promise<Document | null> => {
        const collection = MongoClient.collection;
        const data = collection.aggregate([{ $sample: { size: 1 }}]);

        for await (const doc of data) {
            return doc;
        }
        return null;
    },

    randomWordByLength: async (length: string): Promise<Document | null> => {
        const collection = MongoClient.collection;
        const data = collection.aggregate([
            { $match: { length: length } },
            { $sample: { size: 1 }}
        ]);

        for await (const doc of data) {
            return doc;
        }
        return null;
    },

    wordByPosition: async (position: string): Promise<WithId<Document> | null> => {
        const collection = MongoClient.collection;
        const data = await collection.findOne({ position: position });
        
        return data || null;
    }
};