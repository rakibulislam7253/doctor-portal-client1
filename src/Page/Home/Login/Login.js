// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handellogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center font-bold' >Login</h1>

                <form onSubmit={handleSubmit(handellogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input
                            {...register("email", { required: "Email Address is required" })}
                            type="email" className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span></label>
                        <input
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "password must be 6 char" }

                                })}

                            type="password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget password</span></label>
                    </div>


                    <input value="Login" className='btn btn-accent w-full' type="submit" />
                </form>
                <p>New to Doctors Portal <Link className='text-primary' to={'/signup'}>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>continue with google</button>
            </div>

        </div>
    );
};

export default Login;