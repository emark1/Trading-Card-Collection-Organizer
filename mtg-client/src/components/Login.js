import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { setAuthenticationHeader } from '../utils/authenticate'
import {Link, NavLink} from 'react-router-dom'

class Login extends Component {
    constructor () {
        super() 

        this.state = {
            username: '',
            password: '',
        }
    }


    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLoginClick = () => {
        axios.post('http://localhost:8080/login',{
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            let token = response.data.token
            localStorage.setItem('jsonwebtoken',token)
            this.props.onAuthenticated(token)
            setAuthenticationHeader(token)
        }).then(function() {
            this.props.history.push("/view-all-cards")
        }).catch(error => console.log(error))
    }

    // handleLoginClick = () => {
    //     axios.post('http://localhost:8080/login',{
    //         username: this.state.username,
    //         password: this.state.password
    //     }).then((response) =>  {
    //       if(response.data) {
    //         let token = response.data.token
    //         localStorage.setItem('jsonwebtoken', token)
    //         this.props.onAuthenticated(token)
    //         this.props.history.push('/view-all-cards')
    //       } else if (!response.data) {
    //         this.setState({
    //           ...this.state,
    //           message: response.data.message
    //         })
    //       }
    //     })
    //   }
    


    render() {
        return(
            <div> 
                <input name="username" onChange={this.handleTextBoxChange} placeholder='Username'></input>
                <input name="password" type="password" onChange={this.handleTextBoxChange} placeholder='Password'></input>
                <NavLink to="/view-all-cards"><button onClick={this.handleLoginClick}>Login</button></NavLink>
            </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onAuthenticated: (token) => dispatch({type: 'ON_AUTHENTICATED', token: token})
    }
  }

export default connect(null,mapDispatchToProps)(Login)