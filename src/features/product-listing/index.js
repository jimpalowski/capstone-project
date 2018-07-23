import React from 'react'

export default function ProductListing(props){
    return <div>
        {
            props.products.map( product =>
            <ProductionListItem product={product} />)
        }
        </div>
}