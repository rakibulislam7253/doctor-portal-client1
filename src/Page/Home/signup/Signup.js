import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
const handlesignup=(data)=>
{
console.log(data)
}
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center font-bold' >Sign Up</h1>
                {/* onSubmit={handleSubmit(handellogin)} */}
                <form onSubmit={handleSubmit(handlesignup)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name",{required:'Name is required'})}  className="input input-bordered w-full max-w-xs"/>
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email",{required:true})}  type="email" className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span></label>
                        <input {...register("password",{required:'password is required', minLength: { value: 6, message: "password must be 6 char" }} )}  type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget password</span></label>
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                       
                    </div>


                    <input value="Sign up" className='btn btn-accent w-full' type="submit" />
                </form>
                <p>Already have an account?<Link className='text-primary' to={'/login'}>please Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>continue with google</button>
            </div>

        </div>
    );
};

export default Signup;