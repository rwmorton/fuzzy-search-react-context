import {useState,useRef,useEffect,FC} from 'react'

import {AiOutlineExclamationCircle as ExclamationTriangleIcon} from 'react-icons/ai'

interface NoSearchResultProps {
    liveFor: number
}

const NoSearchResult: FC<NoSearchResultProps> = ({liveFor}) => {
    const [show,setShow] = useState<boolean>(true)
    let timerRef = useRef<any>()

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            setShow(false)
        },liveFor)

        return () => {
            clearTimeout(timerRef.current)
        }
    },[])

    return (
        <>
        {show &&
        <div className="rounded-md bg-yellow-50 p-4 mb-2">
            <div className="flex">
                <div className="flex-shrink-0">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">No results</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                        <p>Please try again with a different keyword.</p>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export {NoSearchResult}
