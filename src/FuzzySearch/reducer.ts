import {
    SearchState,
    initialState,
    Action
} from "./types"

const reducer = (state: SearchState = initialState,action: Action) : SearchState => {
    switch(action.type) {
        case 'SEARCH':
            return {
                query: action.payload,
                status: 'loading',
                results: null
            }
        case 'RESET':
            return initialState
        case 'RESULT':
            return {
                ...state,
                status: 'idle',
                results: action.payload
            }
        case 'ERROR':
            return {
                ...state,
                status: 'error'
            }
        default:
            return state
    }
}

export {reducer}
