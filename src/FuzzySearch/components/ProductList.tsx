import {FC} from 'react'

import {Product} from './Product'
import {NoSearchResult} from './NoSearchResult'

interface Product {
    id: number
    title: string
    brand: string
    price: number
    rating: number
    thumbnail: string
}

interface ProductListProps {
    products: Product[]
}

const ProductList: FC<ProductListProps> = ({products}) => {
    return (
        <div className="px-2 py-2 w-full">
            <div className="">
                <ul>
                    {(products?.length === 0) && <NoSearchResult liveFor={5000} />}
                    {products?.map(product => (
                        <li key={product.title}>
                            <Product
                                name={product.title}
                                brand={product.brand}
                                price={product.price}
                                rating={product.rating}
                                image={product.thumbnail}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export {ProductList}
