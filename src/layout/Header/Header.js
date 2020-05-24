import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import DangKi from './../../pages/Form/DangKi/DangKi';
import DangNhap from './../../pages/Form/DangNhap/DangNhap';
import SweetAlert from 'sweetalert';
import avt from './../../assets/img/avt.jpg';
import * as action from './../../store/users/actions';
import { useDispatch,useSelector } from 'react-redux';
import {MdAddShoppingCart,MdDelete} from 'react-icons/md';
import * as actionCourse from './../../store/courses/actions';
import Logo from "./../../assets/img/logo.png";

function Header() {
    const dispatch = useDispatch();
    const [userHV, setUserHV] = useState('');
    const [countCart,setCountCart]=useState(0);

    const listCart = useSelector(function(state){
        return state.ListCourses.cart
    });
    console.log("List cart Header :",listCart);
    useEffect(() => {
       
    },[]);

    useEffect(()=>{
        setCountCart(listCart.length);
    },[listCart]);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            setUserHV('');
        } else {
            setUserHV(user);
        }
    }, [])

    const handleLogOut = () => {
        setTimeout(() => {
            SweetAlert({
                title: "You already log out",
                text: "See you again!",
                icon: "success",
                buttons: false,
                timer: 1500
            });
            setUserHV('');
            dispatch(action.actOnLogOut(userHV));
            localStorage.removeItem("user");
        }, 1000);
    }

    const actDeleteCart=khoahoc=>{
        dispatch(actionCourse.actDeleteCart(khoahoc))
    }
    return (
        <>
        <div className="header">
            <nav className="navbar navbar-expand-lg ">
                <Link to='/home'>
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item courses">
                            <Link className="nav-link" to='/courses'>Courses</Link>
                        </li>
                        <li className="search">
                            <input type="text" />
                            <Button
                                className="btn-search"
                            >Search</Button>
                        </li>
                        <li className="nav-item blog">
                            <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                        <li className=" nav-item cart">
                            <MdAddShoppingCart/>
                            <span className="count">{countCart}</span>
                            <div className="giohang p-2">
                                <div className="total">${countCart}0.0</div>
                            {
                                listCart.map(o =>{
                                    return(
                                    <div key={o.maKhoaHoc} className="items">
                                        <div className="img">
                                            <img src={o.hinhAnh} alt=''></img>
                                        </div>
                                        <div className="name">
                                            <p>{o.tenKhoaHoc}</p>
                                        </div>
                                        <div className="price">
                                            <p>$10</p>
                                        </div>
                                        <div className='icon-delete'
                                            onClick={()=>actDeleteCart(o)}
                                        >
                                            <MdDelete/>
                                        </div>
                                    </div>
                                    )})
                            } 
                                <div className="buttons">
                                    <Link
                                        to="/gio-hang"
                                        className="btn-view-cart"
                                    >
                                        <Button
                                            type="primary"
                                        >Giỏ hàng</Button>
                                    </Link>
                                    <Link
                                        to="/thanh-toan"
                                        className="btn-checkout"
                                    >
                                        <Button
                                            type="danger"
                                        >Thanh toán</Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="btn-login-logout">
                            {
                                (userHV !== '') ?
                                    <>
                                        <div className="img_avt">
                                            <img src={avt} alt="" />
                                        </div>
                                        <Button
                                            type='danger'
                                            onClick={handleLogOut}
                                        >Đăng xuất</Button>
                                    </>
                                    :
                                    <>
                                        <DangKi />
                                        <DangNhap />
                                    </>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div className="bannertime"></div>
        </>
    )
}

export default Header;