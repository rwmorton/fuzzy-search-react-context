export type SearchStatus = 'idle' | 'loading' | 'error'

export interface SearchState {
    query: string
    status: SearchStatus
    results: any
}

export const initialState: SearchState = {
    query: '',
    status: 'idle',
    results: null
}

export type Action =
| {type: 'SEARCH',payload: string}
| {type: 'RESET'}
| {type: 'RESULT',payload: any[]}
| {type: 'ERROR'}
