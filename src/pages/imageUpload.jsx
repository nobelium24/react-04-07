import{ useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [result, setResult] = useState("")

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

    const uploadImage = async() => {
        try {
            const endPoint = "http://localhost:4000/upload-image";
            const payload = {
                photo:result
            }
            const response = await axios.post(endPoint, payload);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='container mx-auto border border-dark shadow-lg p-5' style={{ height: "300px" }}>
                <h6 className='text-center text-muted display-6'>Image Upload</h6>
                <input type="file" className='form-control w-100 mb-3' onChange={(e)=>imageUploader(e)} />
                <button className='btn btn-dark' onClick={uploadImage}>Upload Image</button>
            </div>

            <img src="https://res.cloudinary.com/woleogunba/image/upload/v1720523303/f4jq1gj43lvut4jwhegw.png" alt="" />
        </>
    )
}

export default ImageUpload