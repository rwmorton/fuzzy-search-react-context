import {useState,ChangeEvent} from 'react'

import FuzzySearch from './FuzzySearch'

const BASE_URL = 'https://dummyjson.com/products/search?q='
const btnClassName = "bg-blue-600 text-white px-2 py-1 rounded-md mx-4"

function App() {
  const [baseUrl,setBaseUrl] = useState<string>(BASE_URL)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setBaseUrl(event.target.value) }
  const resetBaseUrl = () => { setBaseUrl(BASE_URL) }
  const [timeout,setTimeout] = useState<number>(1000)

  return (
    <div className="container items-center mx-auto max-w-3xl my-8">
      <h1>Fuzzy Search Component Demo</h1>
      <i>* Only set up on products endpoint</i>
      <div className="my-4">
        <label>Change base url to force error</label>
        <input value={baseUrl} onChange={handleChange} className="border border-1 border-gray-500 m-4" type="text" />
        <button onClick={resetBaseUrl} className={btnClassName}>RESET</button>
        <p className="my-4">Base url: {baseUrl}</p>
        <div className="flex flex-row items-center pb-4">
          <p>Timeout: {timeout / 1000}s</p>
          <button
            onClick={() => {
              timeout === 1000 ? setTimeout(100000) : setTimeout(1000)
            }}
            className={btnClassName}
          >
            TOGGLE TIMEOUT
          </button>
          <i>* Defaults to 1 second to see the effect quicker.</i>
        </div>
        <hr className="border border-1 border-black" />
      </div>
      <div className="my-8">

      {/* ////////////////////////////////////////////// */}
      {/* //////////////// FUZZY SEARCH //////////////// */}
      {/* ////////////////////////////////////////////// */}

      <FuzzySearch
        baseUrl={baseUrl}
        placeholder="Search products..."
        noResultsTimeout={timeout}
      />

      {/* ////////////////////////////////////////////// */}

      </div>
    </div>
  )
}

export default App
