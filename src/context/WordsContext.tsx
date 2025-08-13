import { createContext, type ReactNode } from "react";

// type
export interface Word {
    word: [];
    definition: string;
    example?: string;
  }

interface DictionaryContextType {
  words: Word[];
  fetchWord: (word: string) => Promise<void>;
}

interface DictionaryProvider{
    children:ReactNode
}

export const DictionaryContext = createContext<DictionaryContextType>({
  words: [],
  fetchWord: async () => {}, // función vacía por defecto
});

export const DictionaryContext = ({children}:DictionaryProvider) =>{
    
}