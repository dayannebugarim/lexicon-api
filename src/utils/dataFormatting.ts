import fs from "fs";
import Word from "../models/Word";
import { config } from 'dotenv';

config();

export const dataFormatting = async (): Promise<Word[]> => {
  const data = await readFile();
  const wordsList: Word[] = [];
  const trashData = data.split("\n").slice(0, 753);
  const filteredData = data.split("\n").slice(753);

  filteredData.map((word, index) => {
    if (!isInvalidWord(trashData, word)) {
      word = word.split("\r")[0];
      wordsList.push({
        word: word,
        position: (index + 1).toString(),
        length: word.length.toString(),
      });
    }
  });
  return wordsList;
};

const isInvalidWord = (trashData: Array<string>, word: string) => {
  return trashData.filter(
    (invalidWord) => invalidWord.toUpperCase() === word.toUpperCase()
  )[0];
};

const readFile = async (): Promise<string> => {
  const path = process.env.FILE_PATH;
  if (!path) return '';
  const words = await new Promise<string>((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  })
  return words;
};