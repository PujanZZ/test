import React from 'react'
import { useState } from 'react'

import { Rdata } from './components/RowData'

export default function App() {


    const [data, setData] = useState(Rdata);
    const [addData, setAddData] = useState({
        name: "",                     //same name as name in input form and addData will have all obj values written
        address: "",                  //default value
        phoneNumber: "",
        email: "",
    })

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name')   //get name ie attribute
        const fieldValue = event.target.value                 // name='value'

        const newFormData = { ...addData }
        newFormData[fieldName] = fieldValue  //user added data

        setAddData(newFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
         
          name: addData.name,
          address: addData.address,
          phoneNumber: addData.phoneNumber,
          email: addData.email,
        };
    
        const newContacts = [...data, newContact];
        setData(newContacts);
        console.log("added")
      };
    



    return (
        <div className='app-container'>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {Rdata.map(({ id, name, address, phoneNumber, email }) => (
                        <tr key={id}>
                            <td data-label="name" >{name}</td>
                            <td data-label="address" >{address}</td>
                            <td data-label="pnumber" >{phoneNumber}</td>
                            <td data-label="email" >{email}</td>
                        </tr>
                    )
                    )
                    }

                </tbody>
            </table>

            <br />
            <h2>Add a contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter an address..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required="required"
                    placeholder="Enter a phonenumber..."
                    onChange={handleAddFormChange}
                />
                <input
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                    onChange={handleAddFormChange}
                />
                <button type='submit' >Add</button>

            </form>
        </div>
    )
}

