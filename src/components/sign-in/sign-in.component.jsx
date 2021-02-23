import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle } from '../../firebase/firebase.utils.js'

import './sign-in.styles.scss'

class SignIn extends React.Component {
    constructor() {
        super()

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({ [name]: value})
    }
    

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                
                <form action="" onSubmit={this.handleSubmit}>
                <FormInput type="email" name='email' label='email' handleChange={this.handleChange} value={this.state.email} required />
                <FormInput type="password" label='password' name='password' handleChange={this.handleChange} value={this.state.password} required />
                
                <CustomButton type="submit">sign in </CustomButton> 
                <CustomButton onClick={signInWithGoogle}>sign in with google</CustomButton> 
                </form>
            </div>
        )
    }
}

export default SignIn