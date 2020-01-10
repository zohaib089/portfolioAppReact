import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default class Register extends Component {
    render() {
        return (

            <div className="auth-wrapper" style={{
                marginTop: "6.3rem",
                marginBottom: ".3rem"

            }} >
                <div className="mt-1 auth-inner" style={{
                    opacity: "0.7"
                }}>

                    <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="/Login">sign in?</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}