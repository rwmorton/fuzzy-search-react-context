import {useState,ChangeEvent} from 'react'

import FuzzySearch from './FuzzySearch'

const BASE_URL = 'https://dummyjson.com/products/search?q='

function App() {
  const [baseUrl,setBaseUrl] = useState<string>(BASE_URL)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setBaseUrl(event.target.value) }
  const resetBaseUrl = () => { setBaseUrl(BASE_URL) }

  return (
    <div className="container items-center mx-auto max-w-3xl my-8">
      <h1>Lessonspace Fuzzy Search Component Demo</h1>
      <div className="my-4">
        <label>Change base url to force error</label>
        <input value={baseUrl} onChange={handleChange} className="border border-1 border-gray-500 m-4" type="text" />
        <button onClick={resetBaseUrl}>RESET</button>
        <p className="my-4">Base url: {baseUrl}</p>
        <hr className="border border-1 border-black" />
      </div>
      <div className="my-8">

      {/* ////////////////////////////////////////////// */}
      {/* //////////////// FUZZY SEARCH //////////////// */}
      {/* ////////////////////////////////////////////// */}

      <FuzzySearch baseUrl={baseUrl} placeholder="Search products" />

      {/* ////////////////////////////////////////////// */}

      </div>
    </div>
  )
}

export default App
