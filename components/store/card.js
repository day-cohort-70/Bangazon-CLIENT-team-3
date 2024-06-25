import Link from 'next/link'
import { getProducts } from '../../data/products'
import { useEffect, useState } from 'react'
import { ProductCard } from '../product/card'

export function StoreCard({ store, seller }) {
    const [productsInStore, setProductsInStore] = useState([])
    const [isExpanded, setIsExpanded] = useState(false)

    useEffect(() => {
        getProducts(`store=${store.id}`).then(prodObjs => setProductsInStore(prodObjs))
    }, [store.id])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className={`column is-half`}>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {store.name}
                    </p>
                </header>
                <div className="card-content">
                    <p className="content">
                        Owner: {seller.first_name} {seller.last_name}
                    </p>
                    <div className="card-content">
                        Description: {store.description}
                    </div>
                    <div className="card-content">
                        Items in store: {store.product_count}
                    </div>
                </div>
                <footer className="card-footer">
                    <button className="card-footer-item" onClick={toggleExpand}>
                        {isExpanded ? 'Hide Products' : 'View Products'}
                    </button>
                    <Link href={`stores/${store.id}`}>
                        <a className="card-footer-item">View Store</a>
                    </Link>
                </footer>
                {isExpanded && (
                    <div className="product-list columns is-multiline ">
                        {productsInStore.map(product => (
                            <div  className="column is-one-quarter" key={product.id}>
                                <ProductCard product={product} key={product.id} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
    
}
