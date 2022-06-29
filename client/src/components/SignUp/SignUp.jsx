import React, {Component} from 'react'

export default class SignUp extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            password:"",
            vPassword:"",
        }
        this.submit = this.submit.bind(this)
        this.handleForm = this.handleForm.bind(this)
    }
    handleForm(e){
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    submit(e){
        e.preventDefault()
        console.log(this.state);
    }
    render(){
        return (
            <div className='SignUp-container'>
                <form className='SignUp-form'>
                    <label>Name</label>
                    <input type="text" placeholder='Enter your name' id='name' onChange={this.handleForm}/>\
                    <label>Email</label>
                    <input type="text" placeholder='Enter email'id='email' onChange={this.handleForm}/>
                    <label>Password</label>
                    <input type="password" placeholder='Enter password' id='password' onChange={this.handleForm}/>
                    <label>Verify Password</label>
                    <input type="password" placeholder='Re-enter password' id='vPassword' onChange={this.handleForm}/>
                    <button onClick={this.submit}>SIGN UP</button>
                </form>
            </div>
          )
    }
}