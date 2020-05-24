import React,{useState,useEffect} from 'react';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
import {Link, useLocation} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Tabs, Card, Button } from 'antd';
import * as action from '../../../store/courses/actions';

import About1 from '../../../assets/img/about1.jpg';
import About2 from '../../../assets/img/about2.jpg';
import About3 from '../../../assets/img/about3.jpg';
import About4 from '../../../assets/img/about4.jpg';
import BgCourse from '../../../assets/img/introduce.jpg';

const { TabPane } = Tabs;

function TrangKhoaHoc(){
    const location = useLocation();
    const [vibCategory, setVibCategory] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(action.actGetListCourse());
    }, [dispatch]);
    useEffect(()=>{
        window.scroll(0,0);
    },[location])
    const categoryCourses = useSelector(function (state) {
        if (vibCategory === false) {
            dispatch(action.actGetCataLogCourse())
            setVibCategory(true)
        } else {
            return state.ListCourses.danhmuckhoahoc
        }
    })
    const listCourses = useSelector(function (state) {
        return state.ListCourses.listCourses;
    });
    const callback = (key) => {
        console.log(key);
    }
    const AddCart = khoahoc => {
        console.log(khoahoc);
        dispatch(action.actAddCart(khoahoc));
    }
    return(
        <div className='courses'>  
            <Header/>
            <div className="content_courses">
                <div className="row content1">
                    <div className="col-12">
                        <div className="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h1>Khóa học tại trung tâm?</h1>
                                <p>Khóa học tại trung tâm Tân Hà luôn mang đến sự an tâm và chất 
                                    lượng cho học viên.
                                    Luôn luôn đáp ứng được tất cả những kiến thức mà cách công ti 
                                    cần và đáp ứng rất tốt.
                                    Tạo ra được sự tin tưởng và đáp ứng được tất cả các kiến thức căn
                                    bản về lập trình , giúp học viên nâng cao khả nâng tư duy ,
                                    hơn hết là luôn luôn đồng hành cùng học viên trên mọi nẻo đường. <br/>
                                    Các khóa học ở trung tâm Tân Hà luôn luôn đáp ứng được : chất lượng
                                     - nâng cao - giá cả hợp lí. 
                                </p>
                            </div>
                        </div>
                        <div className="content-box">
                            <div className="bg_course">
                                <img src={BgCourse} alt=""/>
                            </div>
                            <h2>Hình ảnh tại trung tâm</h2>
                            <ul>
                                <li className="item1">
                                    <div className="bg">
                                        <img src={About1} alt=""/>
                                    </div>
                                </li>
                                <li className="item2">
                                    <div className="bg">
                                        <img src={About2} alt=""/>
                                    </div>
                                </li>
                                <li className="item3">
                                    <div className="bg">
                                        <img src={About3} alt=""/>
                                    </div>
                                </li>
                                <li className="item4">
                                    <div className="bg">
                                        <img src={About4} alt=""/>
                                    </div>
                                </li>
                                <li className="item5">
                                    <div className="bg">
                                        <img src={About2} alt=""/>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content2">
                    <div className="tilte-course">
                        <h3>NHỮNG KHÓA HỌC HIỆN NAY</h3>
                        <h4>TẠI TRUNG TÂM TÂN HÀ</h4>
                        <div className="gach"></div>
                    </div>
                    <div className="tab">
                        <Tabs 
                            defaultActiveKey="1" 
                            onChange={callback}
                            
                        >
                            {
                                categoryCourses && categoryCourses.map((item, index) => {
                                    return (
                                        <TabPane tab={item.tenDanhMuc} key={index}>
                                            {
                                                listCourses.map(course => {
                                                    return (
                                                        course.danhMucKhoaHoc.maDanhMucKhoahoc === item.maDanhMuc ?
                                                            <Card
                                                                className="card-tab"
                                                                key={course.maKhoaHoc}
                                                                hoverable={true}
                                                                style={{ width: 300 }}
                                                                cover={<img alt="example" src={course.hinhAnh} />}
                                                            >
                                                                <h3>{course.tenKhoaHoc}</h3>
                                                                <p>Ngày học : <span>{course.ngayTao}</span></p>
                                                                <p className="luotXem">Lượt đăng kí : <span>{course.luotXem}</span></p>
                                                                <Link
                                                                    to={`/detail_courses/${course.maKhoaHoc}`}
                                                                >
                                                                    <Button
                                                                         className="btn-detail-cart"
                                                                    >
                                                                    Xem chi tiết
                                                                    </Button>
                                                                </Link>
                                                                <Button
                                                                    type="primary"
                                                                    className="add-cart"
                                                                    onClick={() => AddCart(course)}
                                                                >
                                                                    Thêm giỏ hàng
                                                                </Button>
                                                            </Card>
                                                            : ''
                                                    )
                                                })
                                            }
                                        </TabPane>
                                    )
                                })
                            }
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default TrangKhoaHoc;