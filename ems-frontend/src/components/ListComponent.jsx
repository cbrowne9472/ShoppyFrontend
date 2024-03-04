import React, {useState, useEffect} from "react";
import { listProduct} from "../services/StudentService.js";
import {useNavigate} from "react-router-dom";

const ListComponent = () => {

    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        listProduct().then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            console.log(error);

        });
    }, []);

    function addNewProduct() {
        navigate('/add-product');
    }

  return (
    <div className='container'>

        <h2 className={'text-center'}>Our Products</h2>
        <button className={'btn btn-primary'} onClick={addNewProduct}>Add Product</button>
        <table className={'table table-striped table-bordered'}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Product_Name</th>
                    <th>Product_Description</th>
                </tr>
            </thead>
            <tbody>
                {products.map((data) => (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>{data.email}</td>
                        <td>{data.name}</td>
                        <td>{data.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default ListComponent;