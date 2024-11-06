import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoginApi, registerApi } from '../services/allApi';
import { useNavigate } from 'react-router-dom';

function Auth() {

    const [regStattus, setRegStatus] = useState(false)

    const stateChange = () => {
        setRegStatus(!regStattus)
    }

    const navigate=useNavigate()

    const [user, setUser] = useState({
        username: "", password: "", email: ""
    })

    const handleRegister = async () => {
        console.log(user)
        const { username, password, email } = user
        if (!username || !password || !email) {
            alert("Enter valid data")
        } else {
            const result = await registerApi(user)
            console.log(result)
            if (result.status == 200) {
                alert("Registration Successfull!!")
                setUser({
                    username: "", email: "", password: ""
                })
                stateChange()
            }
            else {
                alert("Registration Failed!!")
            }
        }
    }


    const handleLogin = async () => {
        const { email, password } = user
        if (!email || !password) {
            alert("Enter Valid Data!!")
        }
        else {
            const result = await LoginApi(user)
            console.log(result)
            if (result.status == 200) {
                alert("Login Successfull")
                setUser({
                    email:"" , password:""
                  })
                  navigate('/home')
          
            }
            else {
                alert("Login Failed!! .. Invalid email/password")
            }
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center border w-50 mx-auto my-5">

                <div className="row">
                    {
                        regStattus ?
                            <h2 className='text-center my-5'>Register</h2>
                            :
                            <h2 className='text-center my-5'>Login</h2>

                    }
                    <div className="col-md-6">
                        {
                            regStattus ?
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-illustration-download-in-svg-png-gif-file-formats--sign-up-log-register-form-create-account-or-pack-interface-illustrations-3723271.png" className="img-fluid" alt="" />
                            :
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--account-password-security-lock-design-development-illustrations-2757111.png?f=webp" className="img-fluid" alt="" />

                        }
                    </div>

                    <div className="col-md-6 p-3">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }} value={user.email} />
                            </Form.Group>

                            {
                                regStattus &&
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>UserName</Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" onChange={(e) => { setUser({ ...user, username: e.target.value }) }} value={user.username} />
                                </Form.Group>
                            }


                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={(e) => { setUser({ ...user, password: e.target.value }) }} value={user.password} />
                            </Form.Group>

                            <div className='d-flex justify-content-between'>
                                {
                                    regStattus ?
                                        <Button variant="primary" className='' onClick={handleRegister}>
                                            Register
                                        </Button>
                                        :
                                        <Button variant="primary" className='' onClick={handleLogin}>
                                            Login
                                        </Button>
                                }

                                {
                                    regStattus ?
                                    <p>Already Have an account?<a className='link-danger' style={{cursor:'pointer'}} onClick={stateChange}>Login</a></p>
                                    :
                                    <p>Don't Have an account?<a className='link-danger' style={{cursor:'pointer'}} onClick={stateChange}>Register</a></p>

                                }
                            </div>

                        </Form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Auth
