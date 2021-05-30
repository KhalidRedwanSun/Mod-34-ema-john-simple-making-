import React,{useState} from 'react';
import fakeData from '../../fakeData'


const Shop = () => {
    // ekhane fakeData likhe auto import kora jay ..ar import na hole manually import korte hobe.amra ekhane fakedata folder ta import kortesi..then console.log kore dekhbo. (../ dile import a 1 step upore othe).. fakeData import kore console.log(fakeData) korle console a 81 element er array pabo..
    // console.log(fakeData)
    let first10=fakeData.slice(0,10);// 0 theke dhore 9 porjonto 10 bad
    
    let [products,setProducts]= useState(first10);
    // setProducts(first10);

    


    return (
        <div>
            <h1>This is shop</h1>
            <h3>product item {products.length} </h3>
            <ul>
                {
                    products.map(product=><li>{product.name}</li>) 
                }
            </ul>
        </div>
    );
};

export default Shop;
