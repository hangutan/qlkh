import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import * as action from './../store/users/actions';

function TemplateAdmin(){
    const dispatch = useDispatch();
    const history = useHistory();
    const [value,setValue]= useState({
        taiKhoan:'',
        matKhau:''
    });
    const handleLoginAdmin = (e,keyField)=>{
        setValue({
            ...value,
            [keyField]:e.target.value
        })
    }
    const handleSubmit = ()=>{
        dispatch(action.actLoginAdmin(value,history));
    }
    return(
        <div className="wapper-admin">
            <div className="container from-admin">
                <div className="form">
                    <h2>Đăng nhập trang quản trị</h2>
                    <form >
                        <div className="inputBox">
                            <input 
                                type="text" 
                                placeholder="Tên quản trị viên"
                                value={value.taiKhoanAdmin}
                                onChange={(e)=>handleLoginAdmin(e,'taiKhoan')}
                            />
                        </div>
                        <div className="inputBox">
                            <input 
                                type="password" 
                                placeholder="Mật khẩu"
                                value={value.password}
                                onChange={(e)=>handleLoginAdmin(e,'matKhau')}
                            />
                        </div>
                        <div className="inputBox inputBox-button">
                            <input 
                                type="button"
                                value="Login"
                                onClick={handleSubmit}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TemplateAdmin;