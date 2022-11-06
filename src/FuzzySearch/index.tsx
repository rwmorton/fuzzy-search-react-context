import {useReducer} from 'react'

import {SearchContext} from './context'
import {initialState} from './types'
import {reducer} from './reducer'

import {Search} from './components/Search'

const FuzzySearch = () => {
    const [state,dispatch] = useReducer(reducer,initialState)

    console.log(state)

    return (
        <>
        <SearchContext.Provider value={{state,dispatch}}>
            <h1>Fuzzy Search</h1>
            <Search baseUrl="https://dummyjson.com/products/search?q=" debounceTime={500} />
            <hr />
            <p>Query: {state.query}</p>
            <p>Status: {state.status}</p>
            <p>Products:<br/></p>
            <hr/>
            <ul>
                {state.results?.products?.map((product: any) => <li key={product.id}>{product.title}</li>)}
            </ul>
        </SearchContext.Provider>
        </>
    )
}

export default FuzzySearch
