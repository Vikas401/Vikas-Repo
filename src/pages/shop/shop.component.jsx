import React from 'react';

import Shop_Data from './shop.data';
import CollectionPreview from '../../componet/colloction-preview/collection-preview.component';

class ShopPage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections: Shop_Data
        };
    }
    render(){
        const {collections} = this.state
        return (<div className='shop-page'>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        }
            
            </div>)
    }
}

export default ShopPage;