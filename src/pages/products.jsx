import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const endpoint = 'http://localhost:4000/get-product';
    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(endpoint);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
        // console.log(products)
    }, [products])

    const editItem = (id) => {
        navigate(`/edit/${id}`)
    }
    return (
        <>
            <ToastContainer />
            {
                products.map((item, index) =>(
                    // console.log(item);
                    <div className='border border-black w-25 shadow-lg p-3' style={{ height: "fit-content" }} key={index}>
                        <img src={item.image.secure_url} alt="" />
                        <p>Product name: {item.productName}</p>
                        <p>Product price: {item.productPrice}</p>
                        <p>Product description: {item.productDescription}</p>
                        <p>Product brand: {item.productBrand}</p>
                        <div>
                            <button className='btn btn-warning' onClick={()=>{editItem(item._id)}}>Edit</button>
                            <button className='btn btn-danger'>Delete</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Products