import React, { useState } from 'react';
import SweetAlert from "sweetalert";
import { Modal, Button } from 'antd';
import Axios from 'axios';

function DangKi() {

    const [modal2Visible, setModal2Visible] = useState(false);
    const [valueUser, setValueUser] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maNhom: "GP01",
        email: ""
    });
    const [valid, setValid] = useState({
        formValid: false,
        taiKhoanValid: false,
        matKhauValid: false,
        hoTenValid: false,
        emailValid: false,
        soDTValid: false
    })
    const [error, setError] = useState({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDT: "",
        taiKhoan_1: "",
        email_2: ""
    })
    const handleOnChange = (e, keyField) => {
        setValueUser({
            ...valueUser,
            [keyField]: e.target.value
        })
    }
    const handleErrors = event => {
        let { name, value } = event.target;

        let message = value === "" ? name + " Do not be empty" : "";
        let {
            taiKhoanValid,
            matKhauValid,
            hoTenValid,
            emailValid,
            soDTValid
        } = valid;
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = message !== "" ? false : true;
                if (value !== "" && !value.match(/^[A-Z-a-z0-9_-]{1,25}$/i)) {
                    taiKhoanValid = false;
                    message = "account cannot exceed 25 characters !";
                }
                if (value !== "" && !value.match(/^[A-Z-a-z0-9_-]{1,40}$/i)) {
                    taiKhoanValid = false;
                    message = "The account has special characters!";
                }
                break;
            case "matKhau":
                matKhauValid = message !== "" ? false : true;
                if (value !== "" && (value.length <= 8 || value.length >= 16)) {
                    matKhauValid = false;
                    message = " Password is greater than 8 and smaller than 16";
                }

                break;
            case "hoTen":
                hoTenValid = message !== "" ? false : true;
                if (value !== "" && !value.match(/^[a-z-A-Z -]{1,25}$/i)) {
                    hoTenValid = false;
                    message = "Username cannot exceed 25 characters !";
                }
                if (value !== "" && !value.match(/^[a-z-A-Z -]{2,40}$/i)) {
                    hoTenValid = false;
                    message = "Username has special characters !";
                }

                break;
            case "email":
                emailValid = message !== "" ? false : true;
                if (
                    value !== "" &&
                    !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                ) {
                    emailValid = false;
                    message = "Your email is not valid !";
                }
                break;
            case "soDT":
                soDTValid = message !== "" ? false : true;
                if (value !== "" && !value.match(/^[0-9]{10,11}$/i)) {
                    soDTValid = false;
                    message = " Your phone number is not valid";
                }

                break;
            default:
                break;
        }
        setError({
            ...error,
            [name]: message
        })
        setValid({
            formValid: taiKhoanValid &&
                matKhauValid &&
                hoTenValid &&
                emailValid &&
                soDTValid,
            taiKhoanValid,
            matKhauValid,
            hoTenValid,
            emailValid,
            soDTValid
        })
    };

    const handleSubmit = () => {
        if (valid.formValid) {
            setError({
                ...error,
                taiKhoan_1: "",
                email_2: ""
            })
            Axios({
                method: 'POST',
                url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                data: valueUser
            })
                .then(res => {
                    console.log(res, "ok");
                    setTimeout(() => {
                        SweetAlert({
                            title: "Good job!",
                            text: "You clicked the button!",
                            icon: "success",
                            buttons: false,
                            timer: 1500
                        });
                    }, 150);
                    setValueUser({
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        soDT: "",
                        maNhom: "",
                        email: ""
                    });
                    setError({
                        taiKhoan: "",
                        matKhau: "",
                        hoTen: "",
                        email: "",
                        soDT: "",
                        taiKhoan_1: "",
                        email_2: ""
                    })
                })
                .catch(err => {
                    console.log(err.response.data);
                    let message = err.response.data;
                    if (message === "Tài khoản đã tồn tại!") {
                        setError({
                            ...error,
                            taiKhoan_1: message
                        })
                    } else if (message === "Email đã tồn tại!") {
                        setError({
                            ...error,
                            email_2: message
                        })
                    }
                });
        }
        else {
            window.alert('Mời bạn coi lại form đăng nhập!!')
        }
    }
    const handleCancel = ()=>{
        setModal2Visible(false);
        setError({
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            taiKhoan_1: "",
            email_2: ""
        })
    }
    return (
        <>
            <Button
                onClick={() => setModal2Visible(true)}
            >Đăng kí</Button>
            <Modal
                className="modal-fromdk"
                title="Đăng kí tài khoản"
                centered
                visible={modal2Visible}
                onOk={handleSubmit}
                onCancel={() => handleCancel()}
            >
                <form
                    className="form from-dangki"
                    autoComplete="off"
                >
                    <input
                        type="text"
                        name="taiKhoan"
                        onBlur={handleErrors}
                        placeholder="Tài khoản  ..."
                        value={valueUser.taiKhoan}
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
                        type="text"
                        name="hoTen"
                        placeholder="Họ tên  ..."
                        value={valueUser.hoTen}
                        onBlur={handleErrors}
                        onChange={(e) => handleOnChange(e, "hoTen")}
                    />
                    {error.hoTen !== "" ? (
                        <div className="Form_err">
                            (*) {error.hoTen}
                        </div>
                    ) : (
                            ""
                        )}
                    <input
                        type="password"
                        name="matKhau"
                        placeholder="Mật khẩu  ..."
                        value={valueUser.matKhau}
                        onBlur={handleErrors}
                        onChange={(e) => handleOnChange(e, "matKhau")}
                    />
                    {error.matKhau !== "" ? (
                        <div className="Form_err">
                            (*) {error.matKhau}
                        </div>
                    ) : (
                            ""
                        )}
                    <input
                        type="email"
                        name="email"
                        placeholder="Email  ..."
                        value={valueUser.email}
                        onBlur={handleErrors}
                        onChange={(e) => handleOnChange(e, "email")}
                    />
                    {error.email !== "" &&
                        error.email_2 === "" ? (
                            <div className="Form_err">
                                (*) {error.email}
                            </div>
                        ) : (
                            ""
                        )}
                    {error.email_2 !== "" ? (
                        <div className="Form_err">
                            (*) {error.email_2}
                        </div>
                    ) : (
                            ""
                        )}
                    <input
                        type="text"
                        name="soDT"
                        value={valueUser.soDT}
                        placeholder="Sđt  ..."
                        onBlur={handleErrors}
                        onChange={(e) => handleOnChange(e, "soDT")}
                    />
                    {error.soDT !== "" ? (
                        <div className="Form_err">(*) {error.soDT}</div>
                    ) : (
                            ""
                        )}
                </form>
            </Modal>
        </>
    )
}

export default DangKi;