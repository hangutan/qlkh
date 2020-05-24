import React,{useState} from 'react';
import { Modal, Button } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import * as action from './../../../store/courses/actions';

function AddCourses() {
    const [visible,setVisible]=useState(false);
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
    const showModal = ()=>{
        setVisible(true);
    }
    const handleCancel=()=>{
        setVisible(false)
    }
    const handleOk=()=>{
        setVisible(false)
    }
    const handleValue=(e,keyFeild)=>{
        setValue({
            ...value,
            [keyFeild]:e.target.value
        })
    }

    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = "0" + dd;
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

    const handleSubmit =()=>{
        dispatch(action.actAddCourses({
            ...value,
            luotXem: "1000",
            ngayTao: dd + "/" + mm + "/" + yyyy,
            taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userAdmin")).taiKhoan,
            maNhom: "GP01"
        },setVisible));
        setTimeout(()=>{
            dispatch(action.actGetListCourse());
        },1500);
    }
    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Thêm khóa học
            </Button>
            <Modal
                visible={visible}
                title="Thêm mới khóa học"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button 
                        key="submit" 
                        type="primary"  
                        onClick={handleSubmit}
                    >
                        Add Courses
                    </Button>,
                ]}
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
        </div>
    )
}

export default AddCourses;
