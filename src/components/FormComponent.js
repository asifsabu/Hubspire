import React from 'react';
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example", { required: true })} />
                {errors.example && <div className="text-danger">This field is required</div>}
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <div className="text-danger">This field is required</div>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;