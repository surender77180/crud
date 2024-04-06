import React from 'react'
import './Home.css'

export default function Context() {
    return (
        <>
        <h1>Bank Managment System</h1>
           <form >
                <div >
                    <label for="name" className="form-label">Name of a Customer</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>
                <div>
                    <label for="id" className="form-label">City of a Customer</label>
                    <input type="email" className="form-control" id="email" name="email"  required />
                </div>
                <div>
                    <label for="email" className="form-label">Aadhar Card Number of a Customer</label>
                    <input type="email" className="form-control" id="email" name="email"  required />
                </div>
                <div>
                    <label for="email" className="form-label">Email of a Customer</label>
                    <input type="email" className="form-control" id="email" name="email"  required />
                </div>
                <div >
                    <label for="pwd" className="form-label">Phone Number of a Customer</label>
                    <input type="text" className="form-control" id="phone" name="phone"  required />
                </div>
                <button type="submit" className="btn btn-primary submit-btn mt-3">Submit</button>
            </form>
        </>
    )
}
