import React, { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Button} from 'antd';
import AddCourses from './../../Form/AddCourses/AddCourses';
import * as action from './../../../store/courses/actions';
//img
import Avt from '../../../assets/img/avt.jpg';

function DashBoard() {
    const [valueEdit,setValueEdit]=useState({
        maKhoaHoc: "",
        tenKhoaHoc: "",
        moTa: "",
        hinhAnh: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: ""
    })
    const [vibCategory,setVibCategory] = useState(false);
    const [listCourses, setListCourses]=useState(false);
    const [visibleEdit,setVisibleEdit] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    let token = JSON.parse(localStorage.getItem('userAdmin'));
    useEffect(() => {
        if (!token) {
            history.push('/admin')
        }else{
        }
    }, [token, history])
    const listCoursesShow = useSelector(function(state){
        if(listCourses === false){
            dispatch(action.actGetListCourse());
            setListCourses(true);
        }else{
            return state.ListCourses.listCourses;
        }
    })

    const categoryCourses = useSelector(function(state){
        if(vibCategory === false){
            dispatch(action.actGetCataLogCourse())
            setVibCategory(true)
        }else{
            return state.ListCourses.danhmuckhoahoc
        }
    })

    const moveSideBar = ()=>{
        var element = document.getElementById('sidebar');
        element.classList.toggle('active');
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

    const handleDelete = maKhoaHoc =>{
        dispatch(action.actDeleteCourses(maKhoaHoc))
        setTimeout(()=>{
            dispatch(action.actGetListCourse());
        },2000);
    }
    const handleEdit = id =>{
        setVisibleEdit(true);
        const listEdit = listCoursesShow.filter(item=>{
            return item.maKhoaHoc === id
        })   
        setValueEdit(...listEdit);
    }
    console.log(valueEdit)
    const handldeValueEdit = (e,keyField)=>{
        setValueEdit({
            ...valueEdit,
            maNhom: "GP01",
            taiKhoanNguoiTao: JSON.parse(localStorage.getItem("userAdmin")).taiKhoan,
            [keyField]:e.target.value
        });
    }
    const hanldeCancel = ()=>{
        setVisibleEdit(false);
    }
    const handleSubmit = ()=>{
        dispatch(action.actEditCourse(valueEdit));
        setVisibleEdit(false);
        setTimeout(()=>{
            dispatch(action.actGetListCourse())
        },1500)
    }
    return (
        <div className="dashboard">
            <div className="header">
                <h4> Chào mừng đến với trang admin</h4>
                <div className="header-avt">
                    <div className="image">
                        <img src={Avt} alt=""/>
                    </div>
                </div>
                <p className="userName">Hà Ngủ Tân</p>
            </div>
            <div id="sidebar">
                <ul className="menu">
                    <li className="title">ADMIN</li>
                    <li>Quản lí khóa học</li>
                    <li>Quản lí User</li>
                </ul>
            </div>
            <div className="content">
                <AddCourses className="btn_add_courses"/>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Tên khóa học</th>
                            {
                                visibleEdit
                                ?
                                <th scope="col">Hình ảnh</th>
                                :
                                <th scope="col">Người đăng bài</th>
                            }
                            {
                                visibleEdit
                                ?
                                <th scope="col">Mô tả</th>
                                :
                                <th scope="col">Ngày đăng</th>
                            }   
                            <th scope="col">Danh mục</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="body-table">
                        {
                            listCoursesShow && listCoursesShow.map(item=>{
                                return(
                                    <tr key={item.maKhoaHoc}>
                                        <th scope="row">
                                            {
                                                (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                ?
                                                <input className="form-control" type="text"
                                                    value={valueEdit.tenKhoaHoc}
                                                    onChange={(e)=>handldeValueEdit(e,'tenKhoaHoc')}
                                                />
                                                :
                                                item.tenKhoaHoc
                                            }
                                        </th>
                                        <td>
                                            {
                                                (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                ?
                                                <input className="form-control" type="text"
                                                    value={valueEdit.hinhAnh}
                                                    onChange={(e)=>handldeValueEdit(e,'hinhAnh')}
                                                />
                                                :
                                                item.nguoiTao.hoTen
                                            }
                                        </td>
                                        <td>
                                            {
                                                (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                ?
                                                <input className="form-control" type="text"
                                                    value={valueEdit.moTa}
                                                    onChange={(e)=>handldeValueEdit(e,'moTa')}
                                                />
                                                :
                                                item.ngayTao
                                            }
                                        </td>
                                        <td>
                                            {
                                                (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                ?
                                                <select className="form-control"
                                                    defaultValue={valueEdit.maDanhMucKhoaHoc}
                                                    onChange={(e)=>handldeValueEdit(e,'maDanhMucKhoaHoc')}
                                                >
                                                    {
                                                        (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                        ?
                                                            <option>{valueEdit.danhMucKhoaHoc.tenDanhMucKhoaHoc}</option>
                                                        :
                                                        ''
                                                    }
                                                    {renderDanhMuc()}
                                                </select>
                                                :
                                                item.danhMucKhoaHoc.tenDanhMucKhoaHoc
                                            }
                                        </td>
                                        <td>
                                            {
                                                (visibleEdit && valueEdit.maKhoaHoc === item.maKhoaHoc)
                                                ?
                                                <>
                                                    <Button
                                                        className="btn_submit"
                                                        type="primary"
                                                        onClick={handleSubmit}
                                                    >Submit</Button>
                                                    <Button
                                                        className="btn_cancel"
                                                        type="danger"
                                                        onClick={hanldeCancel}
                                                    >Cancel</Button>
                                                </>
                                                :
                                                <>
                                                    <Button
                                                        className="btn_edit"
                                                        type="primary"
                                                        onClick={()=>handleEdit(item.maKhoaHoc)}
                                                    >Sửa</Button>
                                                    <Button
                                                        type='danger'
                                                        onClick={()=>handleDelete(item.maKhoaHoc)}
                                                    >Xóa</Button>
                                                </>
                                            }
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DashBoard;