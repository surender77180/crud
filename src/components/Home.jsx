import React from 'react';
import {Button,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';

export default function Home() {
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