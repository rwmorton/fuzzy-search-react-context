import {FC} from 'react'

import {MdStarRate as StarIcon} from 'react-icons/md'

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export interface IProduct {
    id: number
    title: string
    brand: string
    price: number
    rating: number
    thumbnail: string
}

interface ProductProps {
    product: IProduct
}

const Product: FC<ProductProps> = ({product}) => {
    const {
        title: name,
        brand,
        price,
        rating,
        thumbnail: image
    } = product

    return (
        <>
        <div className="flex px-4 py-2 w-full">
            {/* IMAGE */}
            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                />
            </div>

            {/* INFO */}
            <div className="ml-4 flex flex-1 flex-col">
                {/* NAME AND PRICE */}
                <div>
                    <div className="flex justify-between text-base font-bold text-gray-900">
                        <h3>{name}</h3>
                        <p className="text-sm font-medium text-gray-500">${price.toFixed(2)}</p>
                    </div>
                    {/* BRAND AND RATING */}
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p className="mt-1 text-sm text-gray-500">{brand}</p>
                            <div className="ml-4">
                                <div className="flex items-center">
                                    {[0,1,2,3,4].map((value) => (
                                        <StarIcon
                                        key={rating}
                                        className={classNames(
                                        Math.round(rating) > value ? 'text-amber-500' : 'text-gray-200',
                                        'flex-shrink-0 h-5 w-5'
                                        )}
                                        aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export {Product}
