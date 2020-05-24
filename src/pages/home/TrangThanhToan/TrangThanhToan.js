import React,{useEffect} from 'react';
import ItemThanhToan from '../../../component/ItemThanhToan';
import Header from './../../../layout/Header/Header';
import Footer from '../../../layout/Footer/Footer';
import {useSelector,useDispatch} from 'react-redux';
import {useLocation} from 'react-router-dom';
import * as actionCart from '../../../store/courses/actions';
//images
import TT1 from '../../../assets/img/bitcoin.png';
import TT2 from '../../../assets/img/mastercard.png';
import TT3 from '../../../assets/img/paypal.png';
import TT4 from '../../../assets/img/visa.png';

function TrangThanhToan(){
    const cart = useSelector(state=>state.ListCourses.cart);
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(()=>{
      window.scroll(0,0);
    },[location])
    const renderItemCart = ()=>{
      return cart.map(khoaHoc=>{
        return(
          <ItemThanhToan key={khoaHoc.maKhoaHoc} khoaHoc={khoaHoc}/>
        )
      })
    }

    const handleThanhToan = () =>{
      dispatch(actionCart.actDeleteAllCart());
      alert("ĐÃ THANH TOÁN THÀNH CÔNG");
    }
    return(
        <div className="checkout-page">
        <Header/>
        <div className="checkout-content">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="your-items">
                  <h3>Số lượng Khóa học : 
                    {cart.length}
                  </h3>
                  <div className="list-course">
                     {renderItemCart()}
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="total-pay">
                  <h3>Tổng Tiền : ${cart.length}0.00</h3>
                  <div className="total">
                    <div className="payment">
                      <div className="pay-methods">
                        <span className="title">Thanh toán qua: </span>
                        <span className="pay-cart">
                          <img src={TT1} alt=""/>
                        </span>
                        <span className="pay-cart">
                          <img src={TT2} alt=""/>
                        </span>
                        <span className="pay-cart">
                          <img src={TT3} alt=""/>
                        </span>
                        <span className="pay-cart">
                          <img src={TT4} alt=""/>
                        </span>
                      </div>

                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tên chủ thẻ"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Số thẻ"
                          />
                        </div>
                        <div className="row">
                          <div className="col">
                            <select>
                              <option defaultValue>MM </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="col">
                            <select>
                              <option defaultValue>YY </option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Security Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <select>
                              <option defaultValue>Viet Nam</option>
                              <option>Trung Quoc</option>
                              <option>Thai Lan</option>
                              <option>English</option>
                              <option>Ameria</option>
                              <option>India</option>
                            </select>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Zip/Postal Code"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="form-group">
                              <button
                                type="button"
                                onClick={handleThanhToan}
                                className="btn btn-danger"
                              >
                                Hoàn thành thanh toán
                              </button>
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <i className="fa fa-lock" aria-hidden="true" />
                              <span>Security Payment</span>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {this.props.listCourse.length > 0 ? <StudentsView /> : ""} */}
        <div style={{ height: "50px" }}></div>
        <Footer/>
      </div>
    )
}

export default TrangThanhToan;