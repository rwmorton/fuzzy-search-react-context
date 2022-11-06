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
}

const FuzzySearch: FC<FuzzySearchProps> = ({baseUrl,placeholder}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <>
        <SearchContext.Provider value={{state,dispatch}}>
            <div className="w-full">
                <div className={`
                    ${state.results?.length > 0 || state.status === 'error' ? "border border-1 rounded-xl border-gray-200 shadow-lg" : ""}
                `}>
                    <Search baseUrl={baseUrl} debounceTime={500} placeholder={placeholder} />
                    <ProductList products={state.results?.products} />
                    <SearchError />
                </div>
            </div>
        </SearchContext.Provider>
        </>
    )
}

export default FuzzySearch
