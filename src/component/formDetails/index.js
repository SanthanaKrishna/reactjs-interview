import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import { EmployeeDetailsContext, EmployeeDispatchContext } from '../../container/employeeModule/context';


function EmployeeForm() {
    const setEmployeeDetails = useContext(EmployeeDispatchContext);
    const employeeDetails = useContext(EmployeeDetailsContext);
    return (
        <div className='container'>
            <Formik
                initialValues={{ firstName: '', lastName: '', dob: '', designation: '', profilePhotoLink: '', experience: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    // console.log('employeeDetails', employeeDetails)
                    setEmployeeDetails([...employeeDetails, values])
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                            <label htmlFor="firstName">First Name</label>
                            <input
                                className="form-control"
                                type="firstName"
                                name="firstName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.firstName}
                            />
                            {errors.firstName && touched.firstName && errors.firstName}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="lastName">lastName</label>
                            <input
                                className="form-control"
                                type="lastName"
                                name="lastName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.lastName}
                            />
                            {errors.lastName && touched.lastName && errors.lastName}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="dob">dob</label>
                            <input
                                className="form-control"
                                type="dob"
                                name="dob"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.dob}
                            />
                            {errors.dob && touched.dob && errors.dob}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="designation">designation</label>
                            <input
                                className="form-control"
                                type="designation"
                                name="designation"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.designation}
                            />
                            {errors.designation && touched.designation && errors.designation}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="experience">experience</label>
                            <input
                                className="form-control"
                                type="experience"
                                name="experience"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.experience}
                            />
                            {errors.experience && touched.experience && errors.experience}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Add
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default EmployeeForm
