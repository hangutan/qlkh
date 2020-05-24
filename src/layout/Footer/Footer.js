import React from 'react';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row mb-3">
                        <div className="col-3">
                            <ul>
                                <p>Trung Tâm Tân Hà</p>
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Bài Viết</a>
                                </li>
                                <li>
                                    <a href="/">Sự kiện</a>
                                </li>
                                <li>
                                    <a href="/">Giáo Viên</a>
                                </li>
                                <li>
                                    <a href="/">Mọi Thứ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <p>Danh Mục Mới</p>
                                <li>
                                    <a href="/">Kinh Doanh</a>
                                </li>
                                <li>
                                    <a href="/">Seo</a>
                                </li>
                                <li>
                                    <a href="/">Marketing</a>
                                </li>
                                <li>
                                    <a href="/">Facebook</a>
                                </li>
                                <li>
                                    <a href="/">Tâm Trí</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <p>Hỗ Trợ</p>

                                <li>
                                    <a href="/">Facebook</a>
                                </li>
                                <li>
                                    <a href="/">Zalo</a>
                                </li>
                                <li>
                                    <a href="/">Call me</a>
                                </li>
                                <li>
                                    <a href="/">Sky</a>
                                </li>
                                <li>
                                    <a href="/">TiewView</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <ul>
                                <p>Thông Tin</p>
                                <li>
                                    <span></span>
                                    <span>hnt@gmail.com</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>0868 702 223</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>0868 702 223</span>
                                </li>
                                <li>
                                    <span></span>
                                    <span>20/3/2020</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-6">
                            <p>ELearning HNT React 2020. Powered By HNT </p>
                        </div>
                        <div className="col-6">
                            <ul className="d-flex power">
                                <li>
                                    <a href="/">Privacy</a>
                                </li>
                                <li>
                                    <a href="/">Terms</a>
                                </li>
                                <li>
                                    <a href="/">Sitemap</a>
                                </li>
                                <li>
                                    <a href="/">Purchase</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <div className="content">
                    <h3>Subscribe To Our Newsletter</h3>
                    <p className="my-3">
                        Phasellus nec dolor.Sed ornare semper ipsum. Sed pede orci
                        volutpat sed congue vels gravida non lacus.
                </p>
                    <div className="subscribe">
                        <div className="submit">
                            <input placeholder="Enter Email Address" />
                            <button className="btn btn-info">Sign Up</button>
                        </div>
                        <div className="icons">
                            <a href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-google-plus"></i>
                            </a>
                            <a href="/">
                                <i className="fa fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;