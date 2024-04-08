import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import uuid from 'react-uuid';
import { Link, useNavigate } from 'react-router-dom';

export default function Add() {
    let history = useNavigate();
    
    const [storage, setStorage] = useState([]);
    const [data, setData] = useState([
        {
            name: "",
            accountNo: "",
            deposit: ""
        }
    ]);

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const ids = uuid();
    let uniqueId = ids.slice(0,8);

    function addData() {
        setStorage(...storage, data);
    }

    Employees.push({storage});

    history("/");

    return (
        <>
            <h1>Bank Managment System</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" name="name" value={data.name} onChange={handleInputChange} placeholder="Customer Name" required />
                &nbsp;
                <input type="number" name="accountNo" value={data.accountNo} onChange={handleInputChange} placeholder="Account Number" required />
                &nbsp;
                <input type="number" name="deposit" value={data.deposit} onChange={handleInputChange} placeholder="Deposit Amount" required />
                &nbsp;
                <Button variant="success" onClick={addData}>Add</Button>
            </form>
        </>
    );
}
