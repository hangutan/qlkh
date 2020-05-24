import React,{useEffect} from 'react';
import {useLocation} from "react-router-dom";
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
//img
import Blog1 from './../../../assets/img/blog1.jpg';
import Blog2 from './../../../assets/img/blog2.jpg';
import Blog3 from './../../../assets/img/blog3.jpg';
import About1 from './../../../assets/img/about1.jpg';
import About2 from './../../../assets/img/about2.jpg';
import About3 from './../../../assets/img/about3.jpg';
import About4 from './../../../assets/img/about4.jpg';

function TrangBlog(){
    const location = useLocation();
    useEffect(()=>{
        window.scroll(0,0);
    },[location])
    return(
    <div className="blog">  
        <Header/>
        <div className="content1">
            <div className="title">
                <div className="line-through"></div>
                <h3>TÂN HÀ 16</h3>
                <h5>Lập trình - Du lịch - Gái đẹp</h5>
            </div>
            <div className="container blog-img">
                <div className="row row1">
                    <div className="col-9 img-col9">
                        <div className="khung-img1"></div>
                        <div className="blog-btn1">
                            <p>Blog lập trình hay</p>
                            <h6>Tác giả : Tân Hà</h6>
                            <button>XEM</button>
                        </div>
                        <div className="img1">
                            <img src={Blog2} alt=""/>
                        </div>
                    </div>
                    <div className="col-3 img-col3">
                        <div className="khung-img2"></div>
                        <div className="blog-btn2">
                            <p>Blog đời sống hay</p>
                            <button>XEM</button>
                        </div>
                        <div className="img2">
                            <img src={About2} alt=""/>
                        </div>
                        <div className="khung-img3"></div>
                        <div className="blog-btn3">
                            <p>Blog du lịch hay</p>
                            <button>XEM</button>
                        </div>
                        <div className="img3">
                            <img src={Blog3} alt=""/>
                        </div>
                    </div>
                </div>
                
                <div className="tilte-blog">
                    <h4>BLOG LẬP TRÌNH</h4>
                    <div className="gach"></div>
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={Blog1} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những bãi biển đẹp</h2>
                            <p>Du lịch</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={Blog2} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những cô gái xinh đẹp</h2>
                            <p>Gái đẹp</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={Blog3} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những ngôi trường đáng học</h2>
                            <p>Học tập</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={Blog1} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những bãi biển đẹp</h2>
                            <p>Du lịch</p>
                        </div>
                    </div>
                </div>

                <div className="tilte-blog">
                    <h4>BLOG ĐỜI SỐNG</h4>
                    <div className="gach"></div>
                </div>
                <div className="block">
                    <div className="row">
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={About1} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những bãi biển đẹp</h2>
                            <p>Du lịch</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={About2} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những cô gái xinh đẹp</h2>
                            <p>Gái đẹp</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={About3} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những ngôi trường đáng học</h2>
                            <p>Học tập</p>
                        </div>
                        <div className="col-md-3 col-ms-6 col-sx-12 col-block">
                            <div className="img">
                                <img src={About4} alt=""/>
                            </div>
                            <h6>Sài Gòn, 12/12/2019</h6>
                            <h2>Những bãi biển đẹp</h2>
                            <p>Du lịch</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default TrangBlog;