import React from 'react';
import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {Link,useNavigate} from 'react-router-dom';

export default function Home() {

    let history = useNavigate();

    const handleDelete =(id)=>{
        var index =Employees.map(function(e){
            return e.id
        }).indexOf(id);
        Employees.splice(index,1);

        history('/');
    }

  return (
    <div>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    Employees && Employees.length>0 ?
                    Employees.map((item)=>{
                        return(
                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>
                                <Button onClick={()=> alert(item.id)}>Edit</Button>
                                &nbsp;
                                <Button onClick={()=> handleDelete(item.id)}>Delete</Button>
                            </td>
                        </tr>
                        )
                    })
                    : "Data Not Found..."
                }
            </tbody>
        </Table>
    </div>
  )
}