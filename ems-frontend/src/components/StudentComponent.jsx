import React, {useState} from 'react'
import {addProduct} from "../services/StudentService.js";
import {useNavigate} from "react-router-dom";

const StudentComponent = () => {

    const [name, setEmail] = useState(''); // set the initial state to empty string
    const [email, setName] = useState('');
    const [description, setDesciption] = useState('');

    const navigate = useNavigate();

    function saveProduct(e) {
        e.preventDefault();
        const student = {email, name, description};
        console.log(student)

        addProduct(student).then((response) => {
            console.log(response.data);
            navigate("/");   // redirect to the list of students

        })
    }

    return (
        <div className={'container'}>
            <br></br><br></br>
            <div className={'row'}>
                <div className={'card col-md-6 offset-md-3 offset-md-3'}>
                    <h2 className={"text-center"}>Add Student</h2>
                    <div className={'card-body'}>
                        <form>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Username:</label>
                                <input type={'text'} placeholder={'Username'} name={'email'} className={'form-control'}
                                       value={email} onChange={((e) => setName(e.target.value))}/>
                            </div>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Product Name:</label>
                                <input type={'text'} placeholder={'Product Name'} name={'name'} className={'form-control'}
                                       value={name} onChange={((e) => setEmail(e.target.value))}/>
                            </div>
                            <div className={'form-group mb-2'}>
                                <label className={'form-label'}>Description:</label>
                                <input type={'text'} placeholder={'Description'} name={'description'} className={'form-control'}
                                       value={description} onChange={((e) => setDesciption(e.target.value))}/>
                            </div>
                            <button className={'btn btn-success'} onClick={saveProduct}>Save</button>
                            <button className={'btn btn-danger'} onClick={() => navigate("/")}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentComponent