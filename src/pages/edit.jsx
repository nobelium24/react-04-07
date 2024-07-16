import{ useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productBrand, setProductBrand] = useState("");
    const {id} = useParams();
    const [product, setProduct] = useState({})

    //productName, productPrice, productDescription, productBrand, imag

    const endpoint = `http://localhost:4000/product/${id}`;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await axios.get(endpoint);
                setProduct(response.data.product);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [product])
    
    const editItem = async() => {
        try {
            const editEndPoint = `http://localhost:4000/product/${id}`;
            const payload = {
                productBrand: productBrand ? productBrand : product.productBrand,
                productDescription: productDescription ? productDescription : product.productDescription,
                productName: productName ? productName : product.productName, 
                productPrice: productPrice ? productPrice : product.productPrice,
            }
            console.log(payload)
            const response = await axios.patch(editEndPoint, payload);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='container mx-auto border border-dark shadow-lg p-5' style={{ height: "fit-content" }}>
                <h6 className='text-center text-muted display-6'>Image Upload</h6>
                <input defaultValue={product.productName} placeholder='Product Name' onChange={(e)=>setProductName(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input defaultValue={product.productDescription} placeholder='Product Description' onChange={(e)=>setProductDescription(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input defaultValue={product.productPrice} placeholder='Product Price' onChange={(e)=>setProductPrice(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input defaultValue={product.productBrand} placeholder='Product Brand' onChange={(e)=>setProductBrand(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <button className='btn btn-dark' onClick={editItem}>Edit item</button>
            </div>

            {/* <img src="https://res.cloudinary.com/woleogunba/image/upload/v1720523303/f4jq1gj43lvut4jwhegw.png" alt="" /> */}
        </>
    )
}

export default Edit