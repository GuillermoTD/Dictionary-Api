import React,{useContext, useEffect,useState} from 'react'
import { DictionaryContext } from '@/context/DictionaryContext';
import './WordContent.css';
import { BookType, CirclePlay, Play } from 'lucide-react';
import { Languages } from 'lucide-react';
const WordContent = () => {
    const { word, addWord } = useContext(DictionaryContext);
    const [show,setShow] = useState<boolean>(true)

      // Cuando haya datos nuevos, los guardamos en el contexto
  useEffect(() => {
    if (show) {
        setShow(!show);
    }if(word == null){
        setShow(true);
    }
  }, [word]);


if(show){
    return(
        <div className='w-full h-[20rem]  flex flex-col items-center justify-center gap-[0.5rem]'>
            {/* <BookType size={40} strokeWidth={1.2}/> */}
            <Languages size={40} strokeWidth={1.2}/>
            <p className='text-[1.8rem] md:text-[2rem] text-center'>Welcome to Dictoglish</p>
            <p className=' text-[1.07rem] md:text-[1.12rem] text-center'>Start searching for any word...</p>
        </div>
    )
}

  return (
    <div className='word'>
        <div className="word-header">
            <div className="word-header-phonetics">
                <p>{word[0]?.word}</p>
                <span>{word[0]?.phonetics[1]?.text}</span>
            </div>
            <div className="word-header-playButton">
            {/* <Play color="red" size={18}/> */}
            <CirclePlay size={38} className='z-10' />
            </div>
        </div>
        <div className="word-definitions">
            <div className="word-definitions-noun">
                <div className="word-definitions-noun-head">
                    <p>Meanings</p>
                    <span className='horizontalDivider'></span>
                </div>
                    <ul className='list-disc flex flex-col gap-[1rem]'>
                    {
                        word[0]?.meanings[0]?.definitions?.map(e=>(
                            <>
                                <li>
                                    <p className='text-justify'>{e?.definition}</p>
                                    <p className='text-justify text-slate-500'>{e?.example}</p>
                                </li>
                                <span className='horizontalDivider'></span>
                            </>
                           
                        ))
                    }
                    </ul>
            </div>

       
        </div>
    </div>
  )
}

export default WordContent