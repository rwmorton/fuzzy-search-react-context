import {
    createContext,
    Dispatch
} from 'react'

import {
    initialState,
    SearchState,
    Action
} from './types'

interface SearchContextValue {
    state: SearchState,
    dispatch: Dispatch<Action> | undefined
}

const initialContextValue: SearchContextValue = {
    state: initialState,
    dispatch: undefined
}

const SearchContext = createContext(initialContextValue)

export {SearchContext}
