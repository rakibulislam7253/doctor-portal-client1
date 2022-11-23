
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from'../../../context/Authprovider' ;
import useToken from '../../../hooks/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateuser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateuser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }

    const saveUser = (name, email) =>{
        const user ={name, email};
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }

    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;

// import React, { useContext, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import toast from 'react-hot-toast';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../context/Authprovider';

// const Signup = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { createUser, updateuser } = useContext(AuthContext)
//     const [loginerror, seterror] = useState('')

//     const navi = useNavigate()
//     const handlesignup = (data) => {
//         console.log(data)

//         createUser(data.email, data.password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 toast('User Created Successfully.')
//                 const userInfo = {
//                     displayName: data.name
//                 }
//                 updateuser(userInfo)
//                     .then(() => {
//                         saveuser(data.name, data.email);
//                     })
//                     .catch(err => console.log(err));
//             })
//             .catch(error => {
//                 console.log(error)
//              navi('/')
//             });

//     }
//     const saveuser = (name, email) => {
//         const user = { name, email }
//         fetch('http://localhost:4000/users', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log('save user', data)
//                 navi('/')
//             })


//     }

//     return (
//         <div className='h-[800px] flex justify-center items-center'>
//             <div className='w-96 p-7'>
//                 <h1 className='text-xl text-center font-bold' >Sign Up</h1>

//                 <form onSubmit={handleSubmit(handlesignup)} >


//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Name</span></label>
//                         <input type="text" {...register("name", { required: 'Name is required' })} className="input input-bordered w-full max-w-xs" />
//                         {errors.name && <p role="alert" className='text-red-600'>{errors.name?.message}</p>}
//                     </div>




//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">Email</span></label>
//                         <input {...register("email", { required: true })} type="email" className="input input-bordered w-full max-w-xs" />
//                         {/* {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>} */}
//                     </div>




//                     <div className="form-control w-full max-w-xs">
//                         <label className="label"><span className="label-text">password</span></label>
//                         <input {...register("password", { required: 'password is required', minLength: { value: 6, message: "password must be 6 char" }, pattern: { value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/, message: 'password must be strong(must be [A-Z],[a-z],[#$%&?],(0-9))' } })} type="password" className="input input-bordered w-full max-w-xs" />
//                         <label className="label"><span className="label-text">Forget password</span></label>
//                         {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}

//                     </div>


//                     <input value="Sign up" className='btn btn-accent w-full' type="submit" />
//                     <div>
//                         {loginerror && <p className='text-red-600'>{loginerror} t</p>}
//                     </div>

//                 </form>
//                 <p>Already have an account?<Link className='text-primary' to={'/login'}>please Login</Link></p>
//                 <div className="divider">OR</div>
//                 <button className='w-full btn btn-outline'>continue with google</button>
//             </div>

//         </div>
//     );
// };

// export default Signup;