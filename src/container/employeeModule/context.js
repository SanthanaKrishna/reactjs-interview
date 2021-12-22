import React, { useState, createContext } from 'react'


const EmployeeDetailsContext = createContext(undefined);
const EmployeeDispatchContext = createContext(undefined);

function EmployeeProvider({ children }) {
    const [employeeData, setEmployeeData] = useState([]);
    console.log('provider employeeData', employeeData)

    return (
        <EmployeeDispatchContext.Provider value={setEmployeeData} >
            <EmployeeDetailsContext.Provider value={employeeData}>
                {children}
            </EmployeeDetailsContext.Provider>
        </EmployeeDispatchContext.Provider>
    );
}

export { EmployeeProvider, EmployeeDetailsContext, EmployeeDispatchContext};