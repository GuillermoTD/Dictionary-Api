import { createContext, useState, ReactNode, useContext } from "react";

//tipo para almacenar cada palabra que se busca
interface Word {
  word: [] | null;
}

//tipo para el contexto de diccionario
interface DictionaryContextType {
  word: Word | null;
  addWord: (word: Word) => void;
}

//contexto de diccionario
export const DictionaryContext = createContext<DictionaryContextType>({
  word: null,
  addWord: () => {},
});

//tipo para provider
interface DictionaryProviderProps {
  children: ReactNode;
}

export const DictionaryProvider = ({ children }: DictionaryProviderProps) => {
  const [word, setWord] = useState<Word | null>(null);

  const addWord = (wordItem: Word) => {
    setWord(wordItem);
  };

  return (
    <DictionaryContext.Provider value={{ word, addWord }}>
      {children}
    </DictionaryContext.Provider>
  );
};


// export const DictionaryState = ()=>{
//   const {word, addWord} = useContext(DictionaryContext)
//   return {word, addWord}
// }
