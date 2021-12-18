import { React } from 'react';
import { Field, ErrorMessage } from 'formik';

const FormInput = (props) => {
    return (
        <div className={props.className? props.className + ' input-cont' : 'input-cont'}>
            <Field
                className='form-input '
                id={props.id}
                name={props.name}
                placeholder={props.placeholder}
                type={props.type}
                maxLength={props.max? props.max : null}
            />
            <span className="text-danger">
                <ErrorMessage name={props.name} />
            </span>
        </div>
    );
}

export default FormInput;