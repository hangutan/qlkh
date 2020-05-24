import React from 'react';
import Header from './../../../layout/Header/Header';
import Footer from './../../../layout/Footer/Footer';
//img
import About1 from './../../../assets/img/about1.jpg';
import About2 from './../../../assets/img/about2.jpg';
import About3 from './../../../assets/img/about3.jpg';
import About4 from './../../../assets/img/about4.jpg';

function TrangAbout() {
    return (
        <div className='about'>
            <Header />
            <div className='content'>
            <div className='row content-about'>
                    <div className='col-8'>
                        <div className='title'>Trung tâm đào tạo lập trình viên Hà Ngủ Tân</div>
                        <div className='content'>
                            <p>&nbsp; &nbsp; Là một trong những liên doanh ô tô có mặt đầu tiên tại thị trường Việt Nam,
                            TMV luôn nỗ lực phát triển bền vững và cùng Việt Nam “Tiến tới tương lai”.
                            TMV đã, đang và sẽ không ngừng cung cấp những sản phẩm có chất lượng cao và
                            dịch vụ sau bán hàng hoàn hảo nhằm mang đến sự hài lòng cao nhất cho khách
                            hàng, cũng như đóng góp tích cực cho sự phát triển của ngành công nghiệp ô
                            tô và đất nước Việt Nam.</p>

                            <p> &nbsp; &nbsp;Kể từ khi thành lập đến nay, TMV đã không ngừng lớn mạnh và liên tục phát triển
                            không chỉ về quy mô sản xuất, mà cả doanh số bán hàng. Hiện tại, TMV luôn giữ
                            vị trí dẫn đầu trên thị trường ô tô Việt Nam với sản lượng nhà máy của công ty
                            đạt trên 30.000 xe/năm (theo 2 ca làm việc). Doanh số bán cộng dồn của TMV đạt
                            trên 305.799 chiếc, và các sản phẩm đều chiếm thị phần lớn trên thị trường. Từ
                            11 nhân viên trong ngày đầu thành lập, tới nay số lượng cán bộ công nhân viên
                            của công ty đã lên tới hơn 1.900 người và hơn 6.000 nhân viên làm việc tại hệ
                            thống 41 đại lý/chi nhánh đại lý và Trạm dịch vụ ủy quyền Toyota phủ rộng khắp
                            trên cả nước.</p>
                            <div className='aboutImg'>
                                <img src={About1} alt='' />
                            </div>
                            <p>&nbsp; &nbsp;Trong suốt lịch sử hình thành và phát triển, với sự nỗ lực
                            không ngừng của toàn bộ nhân viên TMV, đại lý, nhà cung cấp và đối tác,
                            TMV đã đạt được nhiều thành tựu to lớn & liên tục phát triển lớn mạnh,
                            hoàn thành sứ mệnh đối với khách hàng, đóng góp đáng kể cho nghành công
                            nghiệp ô tô và xã hội Việt Nam. Với những thành tích đạt được, TMV đã
                            vinh dự được Chính phủ Việt Nam trao tặng Huân chương lao động hạng nhì
                            và được coi là một trong những doanh nghiệp có vốn đầu tư nước ngoài hoạt
                            động thành công nhất tại Việt Nam.</p>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='khung_courses'>
                            <div className='title_4'>Nhận định khóa học</div>
                            <div className='ct'>
                                <span>+</span>Được xây dựng bởi các chuyên gia hàng đầu.
                            </div>
                            <div className='ct'>
                                <span>+</span>Tổng hợp những kiến thức cao cấp phù hợp với các công ti.
                            </div>
                            <div className='ct'>
                                <span>+</span>Lộ trình học được nghiên cứu bài bản.
                            </div>
                            <div className='ct'>
                                <span>+</span>Học phí được giảm tối đa cho những bạn chăm.
                            </div>
                            <div className='ct'>
                                <span>+</span>Luôn luôn đồng hành trong và sau khóa học.
                            </div>
                        </div>
                        <div className='classRoom'>
                            <div className='title_cl'>Phòng học</div>
                            <div className='ct'>
                                Phòng học được trang bị các trang thiết bị hiện đại và được 
                                đánh giá bởi các chuyên gia hàng đầu của Việt Nam và thế giới . . . 
                            </div>
                            <div className='classImg'>
                                <img src={About2} alt=''/>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className='row bg-img'>
                    <div className='col-6 col-img1'>
                        <div className='img-12'>
                            <img src={About1} alt='' />
                        </div>
                    </div>
                    <div className='col-6 col-img2'>
                        <div className='img-12'>
                            <img src={About2} alt='' />
                        </div>
                    </div>
                </div>
                <div className='row bg-img'>
                    <div className='col-4 col-img1'>
                        <div className='img-12'>
                            <img src={About3} alt='' />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='img-12'>
                            <img src={About4} alt='' />
                        </div>
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    )
}

export default TrangAbout;