import {
    useState,
    useContext,
    ChangeEvent
} from 'react'

import {SearchContext} from '../context'

const btnClassName = "bg-blue-600 mx-2 text-white"

const Search = () => {
    const {state,dispatch} = useContext(SearchContext)

    const [query,setQuery] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    const fetchSearchResults = async () => {
        dispatch!({type: 'SEARCH',payload: query})

        const response = await fetch(`https://dummyjson.com/products?q=${query}`)
        const json = await response.json()

        console.log(json)

        dispatch!({type: 'RESULT',payload: json})
    }

    const clearSearch = () => {
        dispatch!({type: 'RESET'})
    }

    return (
        <>
        <div className="my-4">
            <h1>TEST</h1>
            <input type="text" value={query} onChange={handleChange} className="border border-1 border-black" />
            <button onClick={fetchSearchResults} className={btnClassName}>SEARCH</button>
            <button onClick={clearSearch} className={btnClassName}>CLEAR</button>
        </div>
        </>
    )
}

export {Search}
