import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Authprovider';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateuser } = useContext(AuthContext)
    const [loginerror, seterror] = useState('')

    const navi = useNavigate()
    const handlesignup = (data) => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                seterror('')
                const user = result.user
                console.log(user)
                toast('User login successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateuser(userInfo)
                    .then(() => {
                        saveuser  (data.name, data.email)
                    })
                    .catch((error) => {
                        console.log(error)

                    });


            })
            .catch(error => {
                console.log(error);
                seterror(error.message)

            }

            );

    }
    const saveuser = (name, email) => {
        const user = { name, email }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save user', data)
                navi('/')
            })


    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-xl text-center font-bold' >Sign Up</h1>

                <form onSubmit={handleSubmit(handlesignup)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", { required: true })} type="email" className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>




                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">password</span></label>
                        <input {...register("password", { required: 'password is required', minLength: { value: 6, message: "password must be 6 char" }, pattern: { value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/, message: 'password must be strong(must be [A-Z],[a-z],[#$%&?],(0-9))' } })} type="password" className="input input-bordered w-full max-w-xs" />
                        <label className="label"><span className="label-text">Forget password</span></label>
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

                    </div>


                    <input value="Sign up" className='btn btn-accent w-full' type="submit" />
                    <div>
                        {loginerror && <p className='text-red-600'>{loginerror} t</p>}
                    </div>

                </form>
                <p>Already have an account?<Link className='text-primary' to={'/login'}>please Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline'>continue with google</button>
            </div>

        </div>
    );
};

export default Signup;