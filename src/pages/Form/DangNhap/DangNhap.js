import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as action from './../../../store/users/actions';
import {useHistory} from 'react-router-dom';
import { Modal, Button } from 'antd';
import SweetAlert from "sweetalert";
import Axios from 'axios';

function DangNhap() {
    const [modal1Visible, setModal1Visible] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [valueUserDN, setValueUserDN] = useState({
        taiKhoan: '',
        matKhau: ''
    })
    const [error, setError] = useState({
        taiKhoan: '',
        matKhau: '',
        taiKhoan_1: ''
    })
    const [valid, setValid] = useState({
        formValid: false,
        taiKhoanValid: false,
        matKhauValid: false
    })
    const handleOnChange = (e, keyField) => {
        setValueUserDN({
            ...valueUserDN,
            [keyField]: e.target.value
        })
    }
    const handleErrors = event => {
        let { name, value } = event.target;

        let message = value === "" ? " Do not be empty" : "";
        let { taiKhoanValid, matKhauValid } = valid;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = message !== "" ? false : true;
                break;

            case "matKhau":
                matKhauValid = message !== "" ? false : true;
                break;
            default:
                break;
        }
        setError({
            ...error,
            [name]: message
        })
        setValid({
            formValid: taiKhoanValid && matKhauValid,
            taiKhoanValid,
            matKhauValid
        })
    }
    const handleSubmit = () => {
        Axios({
            method: "POST",
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: valueUserDN
        })
        .then(res => {
            setTimeout(() => {
                SweetAlert({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success",
                    buttons: false,
                    timer: 1500
                });
            }, 150);
            console.log(res.data)
            localStorage.setItem("user", JSON.stringify(res.data));
            setValueUserDN({
                taiKhoan: '',
                matKhau: ''
            });
            setError({
                taiKhoan: '',
                matKhau: '',
                taiKhoan_1: ''
            });
            dispatch(action.actOnUpdateUser(res.data))
            setModal1Visible(false);
            setTimeout(()=>{
                history.push('/');
            },1500);
        })
        .catch(err => {
           alert("Tên tài khoản hoặc mật khẩu không đúng ");
           
        })
    }
    const handleCancel = () =>{
        setModal1Visible(false);
        setError({
            taiKhoan: '',
            matKhau: '',
            taiKhoan_1: ''
        })
    }
    return (
        <>
            <Button
                onClick={() => setModal1Visible(true)}
            >Đăng nhập</Button>
            <Modal
                className="form-dangnhap"
                title="Đăng nhập tài khoản"
                centered
                visible={modal1Visible}
                onOk={handleSubmit}
                onCancel={() => handleCancel()}
            >
                <input
                    type="text"
                    name="taiKhoan"
                    placeholder="Tài khoản  ..."
                    onBlur={handleErrors}
                    onKeyUp={handleErrors}
                    value={valueUserDN.taiKhoan}
                    onChange={(e) => handleOnChange(e, "taiKhoan")}
                />
                {error.taiKhoan !== "" &&
                        error.taiKhoan_1 === "" ? (
                            <div className="Form_err">
                            (*) {error.taiKhoan}
                            </div>
                        ) : (
                            ""
                        )}
                        {error.taiKhoan_1 !== "" ? (
                            <div className="Form_err">
                            (*) {error.taiKhoan_1}
                            </div>
                        ) : (
                            ""
                        )}
                <input
                    type="password"
                    name="matKhau"
                    placeholder="Mật khẩu  ..."
                    onBlur={handleErrors}
                    onKeyUp={handleErrors}
                    value={valueUserDN.matKhau}
                    onChange={(e) => handleOnChange(e, "matKhau")}
                />
                {error.matKhau !== "" ? (
                    <div className="Form_err">
                      (*) {error.matKhau}
                    </div>
                  ) : (
                    ""
                  )}
            </Modal>
        </>

    )
}

export default DangNhap;