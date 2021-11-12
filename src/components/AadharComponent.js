import React from 'react';
import { useForm } from "react-hook-form";


function AadharComponent() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
           <form onSubmit={handleSubmit(onSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <input className="form-control" type="number" max="12" {...register("exampleRequired", { required: true, maxLength: 12})} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <div className="text-danger">Please enter aadhar number</div>}

                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    )
}

export default  AadharComponent;