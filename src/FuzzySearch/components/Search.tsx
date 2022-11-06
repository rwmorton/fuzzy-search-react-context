import {
    useState,
    useContext,
    FC,
    ChangeEvent,
    useEffect
} from 'react'

import {useFetch,useDebounce} from '../hooks'

import {SearchContext} from '../context'

const btnClassName = "bg-blue-600 mx-2 text-white"

interface SearchProps {
    baseUrl: string
    debounceTime: number
}

const Search: FC<SearchProps> = ({baseUrl,debounceTime}) => {
    const {state,dispatch} = useContext(SearchContext)

    // internal state
    const [url,setUrl] = useState<string>('')
    const [query,setQuery] = useState<string>('')
    const debouncedQuery = useDebounce<string>(query,debounceTime)
    const {data,error} = useFetch<any>(url)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    // run on debounced query
    useEffect(() => {
        if(debouncedQuery !== '' && !error) {
            setUrl(baseUrl + debouncedQuery)
            dispatch!({type: 'SEARCH',payload: debouncedQuery})
        }
    },[debouncedQuery])

    // run on data change
    useEffect(() => {
        if(data) {
            dispatch!({type: 'RESULT',payload: data})
        }
    },[data])

    // run on error change
    useEffect(() => {
        if(error) {
            dispatch!({type: 'ERROR'})
        }
    },[error])

    const clearSearch = () => {
        dispatch!({type: 'RESET'})
    }

    return (
        <>
        <div className="my-4">
            <h1>TEST</h1>
            <input type="text" value={query} onChange={handleChange} className="border border-1 border-black" />
            <button onClick={clearSearch} className={btnClassName}>CLEAR</button>
        </div>
        </>
    )
}

export {Search}
