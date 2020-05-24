import React,{useEffect,useState} from 'react';
import { Link,useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
import ItemCart from '../../../component/ItemCart';

function TrangGioHang(){
    const [count,setCount]=useState(0);
    const location = useLocation();
    const cart = useSelector(state=>state.ListCourses.cart);

    
    useEffect(()=>{
        setCount(cart.length);
        window.scroll(0,0);
    },[location,cart]);


    const renderItemCart = ()=>{
        return cart.map(khoaHoc=>{
            return(
                    <ItemCart 
                        key={khoaHoc.maKhoaHoc} 
                        khoaHoc={khoaHoc}    
                    />
            )
        })
    }

    return (
        <div className="cart-page">
            <Header/>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-7 p-3 bg-white rounded shadow-sm">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="border-0 bg-light">
                                            <div className="p-2 pr-3 text-uppercase product">
                                                Khóa học
                                            </div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light price">
                                            <div className="py-2 text-uppercase">Giá</div>
                                        </th>
                                        <th scope="col" className="border-0 bg-light remove">
                                            <div className="py-2 text-uppercase">Xóa bỏ</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderItemCart()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-4 p-3 bg-white rounded shadow-sm">
                        <div className="bg-light px-4 py-3 text-uppercase font-weight-bold">
                            TỔNG KHÓA HỌC : <strong>{count} Khóa học</strong>
                    </div>
                        <div className="p-4">
                            <ul className="list-unstyled mb-4">
                                <li className="d-flex justify-content-between py-3 border-bottom">
                                    <strong className="text-muted">Giá khóa học</strong>
                                    <strong>
                                        $10.00
                                    </strong>
                                </li>

                                <li className="d-flex justify-content-between py-3 border-bottom">
                                    <strong className="text-muted">Thuế</strong>
                                    <strong>$0.00</strong>
                                </li>
                                <li className="d-flex justify-content-between py-3 border-bottom">
                                    <strong className="text-muted">Tổng</strong>
                                    <h5 className="font-weight-bold">
                                        ${count}0.00
                                    </h5>
                                </li>
                            </ul>
                            <Link
                                to="/courses"
                                className="btn btn-dark rounded-pill py-2 btn-block"
                            >
                                Xem Khóa Học
                            </Link>
                            <Link
                                to="/thanh-toan"
                                className="btn btn-dark rounded-pill py-2 btn-block"
                            >
                                Thanh Toán
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: "50px",borderBottom:"3px solid white" }}></div>
            <Footer/>
        </div>
    )
}

export default TrangGioHang;