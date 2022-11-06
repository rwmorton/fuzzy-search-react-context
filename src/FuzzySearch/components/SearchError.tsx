import {useContext} from 'react'

import {SearchContext} from '../context'

const SearchError = () => {
    const {state} = useContext(SearchContext)

    return (
        <>
        {state.status === 'error' &&
            <div className="py-16">
                <div className="text-center">
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Error</h1>
                    <p className="mt-2 text-2xl text-base font-normal text-gray-500">
                        Something went wrong.
                        <br />
                        Please search again.
                    </p>
                </div>
            </div>
        }
        </>
    )
}

export {SearchError}
