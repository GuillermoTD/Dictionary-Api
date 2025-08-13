import Navbar from "./components/navbar/Navbar";
import {fetchApi} from './hook/useFetchApi'

function App() {
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/keyboard';
  const {data, error} = fetchApi(url)

  if(data){
    console.log(data)
  }else{
    console.log(error);
  }

  return (
    <>
      <div className="wrapper-container">
        <Navbar/>
      </div>
    </>
  )
}

export default App
