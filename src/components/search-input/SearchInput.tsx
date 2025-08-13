import React, { useContext } from 'react'
import { useEffect,useState } from 'react';
import {fetchApi} from '../../hook/useFetchApi';
import './SearchInput.css'
import { Search } from 'lucide-react';
// import WordsContext from '../../context/WordsContext'

const SearchInput = () => {
    const [inputState,setInputState] = useState<string>('')
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputState}`;
    const {data, error} = fetchApi(url);

    // const words = useContext(WordsContext)

    if(data){
        console.log(Array.isArray(data))
    }

    const handleSearch = (inputText:string)=>{
        console.log(inputText)
        setInputState(inputText)
    }
        
    return (
            <div className="search-input">
                <input type="text" placeholder='search...' onChange={(e => handleSearch(e.target.value))}/>
                <div className="search-input-button">
                    <Search size={18}/>
                </div>
            </div>
    )
}

export default SearchInput