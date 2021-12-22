import React, { useState, createContext } from 'react'
import EmployeeList from '../../component/employeeList';
import EmployeeForm from '../../component/formDetails';
import { EmployeeProvider } from './context';

function EmployeeModule() {
    return (
        <EmployeeProvider>
            <EmployeeForm />
            <EmployeeList/>
        </EmployeeProvider>
    )
}

export default EmployeeModule
