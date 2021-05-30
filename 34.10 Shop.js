import React,{useState} from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    // ekhane fakeData likhe auto import kora jay ..ar import na hole manually import korte hobe.amra ekhane fakedata folder ta import kortesi..then console.log kore dekhbo. (../ dile import a 1 step upore othe).. fakeData import kore console.log(fakeData) korle console a 81 element er array pabo..
    // console.log(fakeData)
    let first10=fakeData.slice(0,10);// 0 theke dhore 9 porjonto 10 bad
    
    let [products,setProducts]= useState(first10);
    console.log(products);

    


    return (
        <div className="shop-container">
            <div className="product-container">
                
                {
                    products.map(pd=>
                    <Product product={pd}></Product>) 
                }
            

            </div>

            <div className="cart-container">
                <h3>This is cart</h3>

            </div>

           
            
        </div>
    );
};

export default Shop;
