import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import {useSelector,useDispatch} from 'react-redux';
import * as action from './../../../store/courses/actions';

function EditCourses(){
    const [modal1Visible,setModal1Visible]=useState(false);
    const [vibCategory,setVibCategory] = useState(false);
    const dispatch = useDispatch();
    const categoryCourses = useSelector(function(state){
        if(vibCategory === false){
            dispatch(action.actGetCataLogCourse())
            setVibCategory(true)
        }else{
            return state.ListCourses.danhmuckhoahoc
        }
    })
    const [value,setValue]=useState({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        hinhAnh: "",
        maDanhMucKhoaHoc: "BackEnd",
        taiKhoanNguoiTao: ""
    })
    const handleValue = ()=>{
        console.log('')
    }
    const handleSubmit = ()=>{
        console.log('');
    }
    const renderDanhMuc = ()=>{
        return(
            categoryCourses && categoryCourses.map((item,index)=>{
                return(
                    <option value={item.maDanhMuc} key={index}>
                        {item.tenDanhMuc}
                    </option>
                )
            })
        )
    }
    return(
    <>
        <Button
            onClick={()=>setModal1Visible(true)}
        >Sửa</Button>
        <Modal
            title="Chỉnh sửa thông tin khóa học"
            centered
            visible={modal1Visible}
            onOk={handleSubmit}
            onCancel={() => setModal1Visible(false)}
        >
            <form>
                <div className="form-group">
                    <label>Mã khóa học</label>
                    <input 
                        className="form-control"
                        type="text"
                        value={value.maKhoaHoc}
                        onChange={(e)=>handleValue(e,'maKhoaHoc')}
                    />
                </div>
                <div className="form-group">
                    <label>Tên khóa học</label>
                    <input 
                        className="form-control"
                        type="text"
                        value={value.tenKhoaHoc}
                        onChange={(e)=>handleValue(e,'tenKhoaHoc')}
                    />
                </div>
                <div className="form-group">
                    <label>Mô tả khóa học</label>
                    <input 
                        className="form-control"
                        type="text"
                        value={value.moTa}
                        onChange={(e)=>handleValue(e,'moTa')}
                    />
                </div>
                <div className="form-group">
                    <label>Hình ảnh</label>
                    <input 
                        className="form-control"
                        type="text"
                        value={value.hinhAnh}
                        onChange={(e)=>handleValue(e,'hinhAnh')}
                    />
                </div>
                <div className="form-group">
                    <label>Danh mục khóa học</label>
                    <select
                        type="text"
                        className="form-control"
                        name="maDanhMucKhoaHoc"
                        defaultValue='BackEnd'
                        onChange={(e)=>handleValue(e,'maDanhMucKhoaHoc')}
                    >
                        {renderDanhMuc()}
                    </select>
                </div>
            </form>
        </Modal>
    </>
    )
}

export default EditCourses;