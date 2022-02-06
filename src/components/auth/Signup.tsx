import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import Button from '../Button'
import { Inputs } from '../../types'
import { useAsyncCall, useAuthenticate } from '../../hooks'

interface Props { }

const Signup: React.FC<Props> = () => {

    const { signup, error, loading } = useAuthenticate()

    // HOOKS: useForm
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    // console.log(watch());

    // HANDLE: onSubmit
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // console.log(data);
        signup(data)
    }

    return (
        <>
            <div className="backdrop"></div>

            <div className="modal modal--auth--form">
                <div className="modal-close">&times;</div>
                <h3 className="header--center paragraph--orange">
                    Sign up to eCommerce-demo
                </h3>

                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__input-container">
                        <label htmlFor="Username" className="form__input-label">Username</label>
                        <input
                            type="text"
                            // name='username'
                            className="input"
                            placeholder='Your username'
                            {...register('username', {
                                required: 'Username is required.',
                                minLength: {
                                    value: 3,
                                    message: 'Username must be at least 3 characters.'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Username must not be greater than 20 characters.'
                                }
                            })}
                        />
                        {errors.username?.message &&
                            <p className="paragraph paragraph--error-small">
                                {errors.username.message}
                            </p>
                        }
                    </div>
                    <div className="form__input-container">
                        <label htmlFor="Email" className="form__input-label">Email</label>
                        <input
                            type="email"
                            // name='email' 
                            className="input"
                            placeholder='Your email'
                            {...register("email", {
                                required: 'Username is required.',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Email is in wrong format.'
                                }
                            })}
                        />
                        {errors.email?.message &&
                            <p className="paragraph paragraph--error-small">
                                {errors.email.message}
                            </p>
                        }
                    </div>
                    <div className="form__input-container">
                        <label htmlFor="Password" className="form__input-label">Password</label>
                        <input
                            type="password"
                            // name='password' 
                            className="input"
                            placeholder='Your password'
                            {...register("password", {
                                required: 'password is required.',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters.'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Password must not be greater than 10 characters.'
                                }
                            })}
                        />
                        {errors.password?.message &&
                            <p className="paragraph paragraph--error-small">
                                {errors.password.message}
                            </p>
                        }
                    </div>

                    <Button type='submit' loading={loading} width='100%' style={{ margin: '0.5rem 0' }}>Submit</Button>
                </form>
                
                {/* Error from firebase */}
                {error && <p className="paragraph paragraph--erorr">{error}</p>}

            </div>
        </>
    )
};

export default Signup;
