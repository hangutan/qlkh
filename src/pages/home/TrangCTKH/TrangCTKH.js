import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useParams,useLocation} from 'react-router-dom';
import * as action from '../../../store/courses/actions';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
//image
import Card from './../../../assets/img/card.jpg';
import Card1 from './../../../assets/img/card1.jpg';
import Card2 from './../../../assets/img/card2.jpg';
import Card3 from './../../../assets/img/card3.jpg';
import CTKH1 from '../../../assets/img/ctkh1.jpg';
//ant design
import{Button} from 'antd';

function TrangCTKH(){
    const location = useLocation();
    const dispatch = useDispatch();
    const {courses_id} = useParams();
    useEffect(()=>{
        window.scroll(0,0);
        dispatch(action.actGetDetailListCourses(courses_id));
        setTimeout(()=>{
            document.getElementById("ct-left").classList.add('active');
            document.getElementById("ct-right").classList.add('active');
        },2000);
    },[dispatch,courses_id,location])

    const courses = useSelector(function(state){
        return state.ListCourses.courses
    })

    const handleAdd = (khoaHoc) =>{
        console.log("Course :",khoaHoc);
        dispatch(action.actAddCart(khoaHoc));
    }

    return(
        <div className='class_ctkh'>
            <Header/>
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
                <div className="khung-gt"></div>
                <div className="title-course">
                    <h1>KHÓA HỌC : <span>{courses?.tenKhoaHoc}</span></h1>
                    <h3>Danh mục : <span>{courses?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</span></h3>
                    <div className="gach"></div>
                </div>
            </div>
            <div className="content">
                <div className="row">
                    <div className="col-8 nd">
                        <div className="title-content">CHI TIẾT KHÓA HỌC</div>
                        <div className="content-blog">
                            <div className="img-content">
                                <img src={courses.hinhAnh} alt=""/>
                            </div>
                            <div className="main-content">
                                <h2>Tên khóa học : <span>{courses?.tenKhoaHoc}</span></h2>
                                <h2>Danh mục : <span>{courses?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</span></h2>
                                <h2>Số người đăng kí : <span>{courses?.luotXem}</span></h2>
                                <h2 className="moTa">Mô tả : <span>{courses.moTa}</span></h2>
                                <button
                                    type="button"
                                    onClick={()=>handleAdd(courses)}
                                >Thêm giỏ hàng</button>
                            </div>
                        </div>
                        <div className="content-default">
                            <div className="block">
                                <h4>Thời lượng khóa học</h4>
                                <p>Được đào tạo chuyên sâu với thời gian offline lên đến 12 buổi.</p>
                                <p>Có thể tham gia các group và tương tác với giáo viên trước và 
                                    sau khi hoàn thành khóa học.
                                </p>
                                <p>Thời gian đến lớp vào thứ 7 và chủ nhật hàng tuần tùy lớp</p>
                            </div>

                            <div className="block">
                                <h4>Giảng viên đào tạo</h4>
                                <p>Thầy : Nguyễn Văn Hùng</p>
                                <p>Hiện đang là leader bên công ti FPT và là giảng viên cao cấp tại trung tâm Tân Hà</p>
                            </div>

                            <div className="block">
                                <h4>Địa điểm các phòng học</h4>
                                <h5>Tại Thành Phố Hồ Chí Minh</h5>
                                <p>116/18, đường Đinh Tiên Hoàng, Quận 1,Thành Phố Hồ Chí Minh</p>
                                <p>34 đường Xô Viết Nghệ Tĩnh, quận 4, thành phố Hồ Chí Minh</p>
                                <h5>Tại Thành Phố Đà Nẵng</h5>
                                <p>116/18, đường Đinh Tiên Hoàng, Quận 1,Thành Phố Đà Nẵng</p>
                                <p>34 đường Xô Viết Nghệ Tĩnh, quận 4,Thành Phố Đà Nẵng</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-4 nd1">
                        <div className="nd1-r1">
                            <div className="khung"></div>
                            <div className="content-khung">
                                <h5>Phòng học</h5>
                                <h6>ở trung tâm</h6>
                            </div>
                            <div className="img-right">
                                <img src={CTKH1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>  
        </div>
    )

}
export default TrangCTKH;