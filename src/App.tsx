import Navbar from "./components/navbar/Navbar";
import SearchInput from "./components/search-input/SearchInput";
import WordContent from "./components/word-content/WordContent";


function App() {
  return (
    <>
      <div className="wrapper-container">
        <Navbar/>
        <SearchInput/>
        <WordContent/>
      </div>
    </>
  )
}

export default App
