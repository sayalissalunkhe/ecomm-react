import React from 'react'
import RangeSlider from '../components/RangeSlider';
import '../../src/App.css';
import './Shop.css';
// import NewData from "../NewData";
// import ShopCard from "../components/ShopCard";
// import Filterbtn from "../components/Filterbtn";
import ProductItem from "../components/ProductItem";


function Shop() {


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log(email);
    //     // console.log(pass);
    // }



    // Filter Component in React Start

    // const [item, setItem] = useState(NewData);

    // const menuItems = [...new Set(NewData.map((Val) => Val.category))];

    // const filterItem = (curcat) => {
    //     const newItem = NewData.filter((newVal) => {
    //         return newVal.category === curcat;
    //     });
    //     setItem(newItem);
    // };

    // return (
    //     <>
    //         <div className="container-fluid">
    //             <div className="row">
    //                 <h1 className="col-12 text-center my-3 fw-bold">Food Filtering App</h1>
    //                 <Filterbtn
    //                     filterItem={filterItem}
    //                     setItem={setItem}
    //                     menuItems={menuItems}
    //                 />
    //                 <ShopCard item={item} />
    //             </div>
    //         </div>

    //     </>
    // )

    // Filter Component in React End

    return (
        <>
            <div className='page-banner hero-container'>
                <div className='banner-content'>
                    <h1>Shop</h1>
                </div>
            </div>

            <div className='container'>
                <div className='flex-box'>
                    <div className="w-30">
                        <RangeSlider />
                    </div>
                    <div className="w-70">
                        <ProductItem />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
