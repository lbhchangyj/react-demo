import React, { Component } from 'react';
import Logo from '../../component/logo/logo';
import './login.css';

export default class Login extends Component{
    render() {
        return (
            <div className="login-container">
                <div className="login-wrapper">
                    <Logo></Logo>
                    <div className="login-handlers">
                        <div className="account_label">
                            <label>
                                <i className="iconfont"></i>
                            </label>
                            <input type="account" value="" placeholder="请输入账号" />
                        </div>
                        <div className="password_label">
                            <label>
                                <i className="iconfont"></i>
                            </label>
                            <input type="password" value="" placeholder="请输入密码" />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}