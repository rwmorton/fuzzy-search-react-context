import {useContext,FC} from 'react'

import {SearchContext} from '../context'

import {Product,IProduct} from './Product'
import {NoSearchResult} from './NoSearchResult'

interface ProductListProps {
    products: IProduct[]
    noResultsTimeout: number
}

const ProductList: FC<ProductListProps> = ({products,noResultsTimeout}) => {
    const {state} = useContext(SearchContext)

    return (
        <div className={`px-2 w-full ${state.status !== 'error' ? "" : "py-2"}`}>
            <div className="">
                <ul>
                    {(products?.length === 0) && <NoSearchResult liveFor={noResultsTimeout} />}
                    {products?.map(product => (
                        <li key={product.id}>
                            <Product product={product}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export {ProductList}
