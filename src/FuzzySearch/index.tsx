import {useReducer,FC} from 'react'

import {SearchContext} from './context'
import {initialState} from './types'
import {reducer} from './reducer'

import {
    Search,
    ProductList,
    SearchError
} from './components'

interface FuzzySearchProps {
    baseUrl: string
    placeholder: string
    noResultsTimeout: number
}

const FuzzySearch: FC<FuzzySearchProps> = ({baseUrl,placeholder,noResultsTimeout}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

     // results or error

    return (
        <>
        <SearchContext.Provider value={{state,dispatch}}>
            <div className="w-full">
                <div className={`
                    ${
                        state.results != undefined || state.status === 'error'
                        ? "border border-1 rounded-xl border-gray-200 shadow-lg pb-0"
                        : ""
                    }
                `}>
                    <Search baseUrl={baseUrl} debounceTime={500} placeholder={placeholder} />
                    <ProductList products={state.results?.map((item: any) => item.item)} noResultsTimeout={noResultsTimeout} />
                    <SearchError />
                </div>
            </div>
        </SearchContext.Provider>
        </>
    )
}

export default FuzzySearch
