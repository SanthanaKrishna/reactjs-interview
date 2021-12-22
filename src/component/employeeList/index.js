import React, { useContext } from 'react';
import { EmployeeDetailsContext } from '../../container/employeeModule/context';
import './employeeList.css';

function EmployeeList() {
    const employeeDetails = useContext(EmployeeDetailsContext);
    console.log('list', employeeDetails)
    return (
        <div className='employee__list'>
            
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Dob</th>
                    <th>Designation</th>
                    <th>Experience</th>
                </tr>
                {employeeDetails.length ? employeeDetails.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.firstName}</td>
                            <td>{val.lastName}</td>
                            <td>{val.dob}</td>
                            <td>{val.designation}</td>
                            <td>{val.experience}</td>
                        </tr>
                    )
                })
                    :
                    <p>Empty</p>
                }
            </table>
        </div>
    )
}

export default EmployeeList
