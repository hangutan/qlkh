import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import * as action from '../../../store/courses/actions';
import {Button} from 'antd';
import {IoMdQuote} from "react-icons/io";
//img
import Card from './../../../assets/img/card.jpg';
import Card1 from './../../../assets/img/card1.jpg';
import Card2 from './../../../assets/img/card2.jpg';
import Card3 from './../../../assets/img/card3.jpg';
import Introduce from './../../../assets/img/introduce.jpg';
import avt from './../../../assets/img/avt.png';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
import OwlCarousel from 'react-owl-carousel';
import {ReviewStudent} from './../../../store/dataReview';

function HomePage() {
    const [review]=useState(ReviewStudent);
    console.log(review);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action.actGetListCourse());
        setTimeout(()=>{
            document.getElementById("ct-left").classList.add('active');
            document.getElementById("ct-right").classList.add('active');
        },2000);
    }, [dispatch]);

    const listCourses = useSelector(function(state) {
        return state.ListCourses.listCourses;
    });

    const renderData = () => {
        return listCourses.map(item => {
            return (
                <div key={item.maKhoaHoc} className="item">
                    <div className="card">
                        <div className="img"></div>
                        <img src={item.hinhAnh} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{item.tenKhoaHoc}</h5>
                            <div className="card-text"><span>Ngày học :</span>{item.ngayTao}</div>
                            <div className="card-text"><span>Đã đăng kí :</span>{item.luotXem}</div>
                            <Link to={`/detail_courses/${item.maKhoaHoc}`}>
                                <Button
                                    className="btn-detail"
                                >
                                   VIEW DETAIL
                                </Button>
                            </Link>
                            <Button
                                className="btn-cart"
                                onClick={()=>addCart(item)}
                            >ADD CART</Button>
                        </div>
                    </div>
                </div>
            )
        })
    }
    const renderDataReview = ()=>{
        return review.map((item,index)=>{
            return(
                <div key={index} className="card-student">
                    <div className="nd">
                        <IoMdQuote className="icon-nd"/>
                        <p>{item.nd}</p> 
                    </div>
                    <div className="avt">
                        <img src={avt} alt="" />
                    </div>
                    <div className="name">
                        {item.name}
                    </div>
                </div>
            )
        })
    }
    const addCart=(khoahoc)=>{
        dispatch(action.actAddCart(khoahoc));
    }
    return (
        <>
            <Header />
            <div className="tan__home">
                <div className="khung-img"></div>
                <div id="ct-header">
                    <div id="ct-left">Những khóa học mang tính hiện đại</div>
                    <div id="ct-right">Trung tâm đào tạo lập trình viên Tân Hà</div>
                </div>
                <div className="img_bg">
                    <img src={Card} alt="" />
                </div>
                <div className="khung-nd">
                    <div className="card">
                        <div className="img">
                            <img src={Card1} alt=""/>
                        </div>
                        <div className="title">LỊCH KHAI GIẢNG</div>
                        <div className="btn-detail">
                            <Button
                                className="btn"
                            >XEM CHI TIẾT</Button>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="img">
                            <img src={Card2} alt=""/>
                        </div>
                        <div className="title">LỘ TRÌNH HỌC</div>   
                         <div className="btn-detail">
                            <Button
                                className="btn"
                            >XEM CHI TIẾT</Button>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="img">
                            <img src={Card3} alt=""/>
                        </div>  
                        <div className="title">HỌC TRỰC TUYẾN</div>
                         <div className="btn-detail">
                            <Button
                                className="btn"
                            >XEM CHI TIẾT</Button>
                        </div>
                    </div>
                </div>
                <div className="khung-gt"></div>
                <div className="introduce">
                    <div className="bg-grey"></div>
                    <div className="bg-img">
                        <img src={Introduce} alt=""/>
                    </div>
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-md-6 col-ms-6 col-xs-12">
                                <div className="article">
                                    <div className="title">TẠI SAO NÊN LỰA CHỌN TRUNG TÂM TÂN HÀ :</div>
                                    <div className="content">
                                        <div className="block">
                                            <div className="stt">1</div>
                                            <h4>Phương pháp giảng dạy được kiểm định quốc tế</h4>
                                            <p>Lập trình là một món ăn khô khan, nhưng chúng tôi biết
                                                cách biến nó thành món ăn ngon miệng cho bạn.
                                                Truyền cảm hứng cho học viên là những gì chúng tôi làm được tốt nhất.
                                            </p>
                                        </div>
                                        <div className="block">
                                            <div className="stt">2</div>
                                            <h4>Giảng viên là những người có nhiều năm kinh nghiệm</h4>
                                            <p>100% giảng viên tại Tân Hà đều đáp ứng 02 tiêu chí sau:
                                                Kinh nghiệm thực tế tối thiểu 03 năm và đam mê giảng dạy.
                                                Những giảng viên không đạt yêu cầu sẽ bị loại bỏ ngay.
                                            </p>
                                        </div>
                                        <div className="block">
                                            <div className="stt">3</div>
                                            <h4>Học phí rẻ nhất trên thị trường hiện nay</h4>
                                            <p>Bạn đừng ngạc nhiên, Trung Tâm Tân Hà ra đời dựa trên đam mê
                                                lập trình, được đứng lớp và truyền cảm hứng cho học viên là niềm vinh hạnh
                                                của chúng tôi. Và đặc biệt, Tân Hà không hợp tác với bất kì một
                                                bên thứ hai nào, do đó: "100% học phí đều dùng cho việc tăng
                                                hiệu quả học tập của các bạn học viên".
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wapper">
                    <div className="container main">
                        <div className="courses">
                            <div className="tilte-course">
                                <h3>NHỮNG KHÓA HỌC HIỆN NAY</h3>
                                <h4>TẠI TRUNG TÂM TÂN HÀ</h4>
                                <div className="gach"></div>
                            </div>
                            <OwlCarousel
                                className="owl-theme"
                                margin={48}
                                nav
                                dotsEach={false}
                                responsiveClass
                                responsive={{
                                    0: {
                                        items: 2,
                                        slideBy: 2
                                    },
                                    600: {
                                        items: 3,
                                        slideBy: 3
                                    },
                                    992: {
                                        items: 4,
                                        slideBy: 4
                                    }
                                }}
                                key={`carousel_${listCourses.length}`}
                            >
                                {renderData()}
                            </OwlCarousel>
                        </div>
                    </div> 
                </div>
                <div className="review-student">
                    <div className="review">
                        <div className="tilte-course">
                            <h3>Cảm nhận của các học viên</h3>
                            <h4>Khi học tại trung tâm Tân Hà</h4>
                            <div className="gach"></div>
                        </div>
                        <OwlCarousel
                            className="owl-theme slider"
                            margin={48}
                            nav={false}
                            dotsEach={false}
                            responsiveClass
                            responsive={{
                                0: {
                                    items: 2,
                                    slideBy: 2
                                },
                                600: {
                                    items: 2,
                                    slideBy: 2
                                },
                                992: {
                                    items: 3,
                                    slideBy: 3
                                }
                            }}
                            key={`review_${review.length}`}
                        >
                            {renderDataReview()}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage;