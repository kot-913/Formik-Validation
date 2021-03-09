import React from 'react';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

const initialValues =  {
    name: "",
    email: "",
    country: "",
};
const onSubmit = values => console.log(values);
const validate = values => {
    let errors = {};
    if(!values.name){
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        }
    if(!values.country){
        errors.country = 'Required';
    }
    return errors;
};

// const validationScheme = Yup.object({
//     name: Yup.string().required('Required!'),
//     email: Yup.string().email('Invalid email address!').required('Required!'),
//     country: Yup.string().required('Required!'),
// });

function MainForm(){

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validationScheme
        validate
    });

   return(
       <div>
           <form onSubmit={formik.handleSubmit}>
           <div className="form-control">
               <label htmlFor='name'>Name</label>
               <input 
               type='text' 
               id='name' 
               name='name' 
               onChange={formik.handleChange} 
               onBlur={formik.handleBlur}
               value={formik.values.name}
               />
               { formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
            </div>

            <div className="form-control">
               <label htmlFor='email'>E-mail</label>
               <input 
               type='email' 
               id='email' 
               name='email' 
               onChange={formik.handleChange} 
               onBlur={formik.handleBlur}
               value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
               </div>

               <div className="form-control">
               <label htmlFor='country'>Country</label>
               <input 
               type='text' 
               id='country' 
               name='country' 
               onChange={formik.handleChange} 
               onBlur={formik.handleBlur}
               value={formik.values.country}
               />
               {formik.touched.country && formik.errors.country ? <div className="error">{formik.errors.country}</div> : null}
               </div>

               <button type='submit'>Submit</button>
           </form>
       </div>
   )

}

export default MainForm;