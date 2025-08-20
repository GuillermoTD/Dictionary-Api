import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import {fetchApi} from '../../hook/useFetchApi';
import './SearchInput.css'
import { Search } from 'lucide-react';
import { DictionaryContext } from '@/context/DictionaryContext';
 
// import WordsContext from '../../context/WordsContext'
const SearchInput = () => {
  const [inputState, setInputState] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const { word, addWord } = useContext(DictionaryContext);

 
    const { data, error } = fetchApi(url);

  const handleSearch = (inputText: string, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`);
      console.log('se ejecuto')
    }
    console.log('funciona', event.key)
  };

  const handleClick = () => {
    setUrl(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputState}`);
    console.log('clic')
    console.log(url)
    console.log(word)
  };

  // Cuando haya datos nuevos, los guardamos en el contexto
  useEffect(() => {
    if (data) {
      addWord(data);
    }
  }, [data]);

  return (
    <form className="search-input">
      <input
        type="text"
        placeholder="search..."
        onKeyDown={(e) => handleSearch(inputState, e)}
        onChange={(e) => setInputState(e.target.value)}
      />
      <div className="search-input-button" onClick={handleClick}>
        <Search size={18} />
      </div>
    </form>
  );
};


export default SearchInput