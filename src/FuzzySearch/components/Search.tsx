import {
    useState,
    useContext,
    FC,
    ChangeEvent,
    useEffect
} from 'react'

import {RiCloseCircleFill} from 'react-icons/ri'

import {useFetch,useDebounce} from '../hooks'

import {SearchContext} from '../context'

interface SearchProps {
    baseUrl: string
    debounceTime: number
    placeholder: string
}

const Search: FC<SearchProps> = ({baseUrl,debounceTime,placeholder}) => {
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
        if(debouncedQuery !== '') { // && !error
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
        setQuery('')
    }

    return (
        <>
        <div className="relative">
            {/* SEARCH ICON */}
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            {/* INPUT */}
            <input
                onChange={handleChange}
                type="text"
                value={query}
                placeholder={placeholder}
                className={`
                    block p-2 pl-10 w-full text-sm
                    text-black bg-white rounded-xl font-medium
                    ${state.results && state.status === 'idle' || state.status === 'error' ? "focus:outline-none" :
                    `rounded-xl border-gray-300 border border-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    focus:border-2 focus:border-indigo-600
                    focus:outline outline-offset-0 outline-4 outline-indigo-300`
                    }
                `}
            />
            {/* SPINNER */}
            {state.status == 'loading' &&
                <div role="status" className="absolute right-2 bottom-2.5">
                    <div
                        className={`
                            w-5 h-5 rounded-full animate-spin
                            border-2 border-solid
                            border-indigo-600 border-t-transparent
                        `}
                    />
                </div>
            }
            {/* CLEAR ICON */}
            {((state.status !== 'loading' && state.results) || state.status === 'error') &&
                <div className="absolute right-2 bottom-1.5">
                    <button type="submit" onClick={clearSearch}>
                        <RiCloseCircleFill className="text-red-600" />
                    </button>
                </div>
            }
        </div>
        </>
    )
}

export {Search}
