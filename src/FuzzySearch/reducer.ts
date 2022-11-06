import {
    SearchState,
    initialState,
    Action
} from "./types"

const reducer = (state: SearchState = initialState,action: Action) : SearchState => {
    switch(action.type) {
        case 'SEARCH':
            // console.log(`dispatching SEARCH action with query = ${action.payload}`)
            return {
                query: action.payload,
                status: 'loading',
                results: null
            }
        case 'RESET':
            // console.log(`dispatching RESET action`)
            return initialState
        case 'RESULT':
            // console.log(`dispatching RESULT action with results size = ${action.payload.length}`)
            return {
                ...state,
                status: 'idle',
                results: action.payload
            }
        case 'ERROR':
            // console.log(`dispatching ERROR action`)
            return {
                ...state,
                status: 'error'
            }
        default:
            return state
    }
}

export {reducer}
