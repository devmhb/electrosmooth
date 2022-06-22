import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const FooterBanner = ({footerBanner: { discount, midText, saleTime, largText1,largText2, smallText, desc, product,buttonText,image}}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
        <p>{discount}</p>
        <h3>{midText}</h3>
        <h3>{largText1}</h3>
        <p>{saleTime}</p>
        </div>
        <div className="right">
            <p>{smallText}</p>
            <h3>{largText2}</h3>
            <p>{desc}</p>
        <Link href={`/product/${product}`}>
          <button type='button'>{buttonText}</button>
        </Link>
        </div>
        <img src={urlFor(image)} alt="footer-banner-img"
        className='footer-banner-image'
        />
      </div>
    </div>
    )
}

export default FooterBanner