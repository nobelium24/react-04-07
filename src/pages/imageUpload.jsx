import{ useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [result, setResult] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productBrand, setProductBrand] = useState("");


    const imageUploader = (e) => {
        console.log(e)
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const myResult = reader.result;
            setResult(myResult);
        }
    }

    //productName, productPrice, productDescription, productBrand, image

    const uploadImage = async() => {
        try {
            const endPoint = "http://localhost:4000/add-product";
            const payload = {
                productBrand,
                productDescription,
                productName, 
                productPrice,
                image:result
            }
            const response = await axios.post(endPoint, payload);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='container mx-auto border border-dark shadow-lg p-5' style={{ height: "fit-content" }}>
                <h6 className='text-center text-muted display-6'>Image Upload</h6>
                <input placeholder='Product Name' onChange={(e)=>setProductName(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input placeholder='Product Description' onChange={(e)=>setProductDescription(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input placeholder='Product Price' onChange={(e)=>setProductPrice(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input placeholder='Product Brand' onChange={(e)=>setProductBrand(e.target.value)} className='form-control w-100 mb-3' type="text" />
                <input type="file" className='form-control w-100 mb-3' onChange={(e)=>imageUploader(e)} />
                <button className='btn btn-dark' onClick={uploadImage}>Upload Image</button>
            </div>

            {/* <img src="https://res.cloudinary.com/woleogunba/image/upload/v1720523303/f4jq1gj43lvut4jwhegw.png" alt="" /> */}
        </>
    )
}

export default ImageUpload