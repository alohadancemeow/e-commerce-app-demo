import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Product, products } from '../data/products'
import PageNotFound from '../pages/PageNotFound'

interface Props { }

const ProductDetail: React.FC<Props> = () => {

  // # State
  const [product, setProduct] = useState<Product | undefined>()
  console.log(product);

  // HOOKS: params
  const params = useParams()
  console.log(params);


  // EFFECT: params
  useEffect(() => {
    const prod = products.find(item => item.id === params.productId)
    prod
      ? setProduct(prod)
      : setProduct(undefined)
  }, [params])


  // Return JSX
  if (!product) return <PageNotFound />

  return (
    <div className="page--product-detail">

      {/* image */}
      <div className="product-detail__section">
        <img src={product.imageUrl} alt={product.title} className='product-image' />
      </div>

      {/* info */}
      <div className="product-detail__section">

        <div className="product-detail__sub-section">
          <h3 className="header">{product.title}</h3>
          <p className="paragraph">{product.description}</p>
        </div>

        <div className="product-detail__sub-section">
          <p className="paragraph">Price:{' '}
            <span className='paragraph--orange'>${product.price.toFixed(2)}</span>
          </p>
        </div>

        <div className="product-detail__sub-section product-detail__sub-section--stock">
          <p className="paragraph">Availability: {' '}
            <span className='paragraph--success'>In stock</span>
          </p>
        </div>

        <div className="product-detail__sub-section quantity-control">
          <div className='qty-action'>
            <FontAwesomeIcon icon={['fas', 'minus']} size='xs' color='grey' />
          </div>
          <div className='qty-action qty-action--qty'>
            <div className='paragraph'>1</div>
          </div>
          <div className='qty-action'>
            <FontAwesomeIcon icon={['fas', 'plus']} size='xs' color='grey' />
          </div>
        </div>

        <Button >Add to cart</Button>

      </div>
    </div>

  )
}

export default ProductDetail
