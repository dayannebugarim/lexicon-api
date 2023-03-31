import { MongoClient } from './../database/MongoClient';
import { Document, WithId } from 'mongodb';


export default class WordService {
    async randomWord (): Promise<Document | null> {
        const collection = MongoClient.collection;
        const data = collection.aggregate([{ $sample: { size: 1 }}]);

        for await (const doc of data) {
            return doc;
        }
        return null;
    }

    async randomWordByLength (length: string): Promise<Document | null> {
        const collection = MongoClient.collection;
        const data = collection.aggregate([
            { $match: { length: length } },
            { $sample: { size: 1 }}
        ]);

        for await (const doc of data) {
            return doc;
        }
        return null;
    }

    async wordByPosition (position: string): Promise<WithId<Document> | null> {
        const collection = MongoClient.collection;
        const data = await collection.findOne({ position: position });

        return data || null;
    }
}