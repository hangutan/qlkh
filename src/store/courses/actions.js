import { CallAPI } from '../../ultis/api';
import SweetAlert from 'sweetalert';

export const actGetListCourse = () => {
    return dispatch => {
        CallAPI('QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01', 'GET', null, null)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: 'GET_LIST_COURSE',
                    payload: res.data
                })

            })
            .catch(err => console.log(err))
    }
}

export const actGetDetailListCourses = (id) => {
    return dispatch => {
        CallAPI(
            `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
            'GET',
            null,
            null
        )
            .then(res => {
                dispatch({
                    type: 'GET_DETAIL_LIST_COURSES',
                    payload: {
                        courses: res.data
                    }
                })
            })
            .catch(err => console.log(err))
    }
}

const authToken = JSON.parse(localStorage.getItem('userAdmin'));


export const actAddCourses = (course,setVisible) => {
    console.log(course)
    return dispatch => {
        if (authToken) {
            let headers = {
                Authorization: `Bearer ${authToken.accessToken}`
            };
            CallAPI(
                "QuanLyKhoaHoc/ThemKhoaHoc",
                "POST",
                course,
                headers
            )
            .then(res => {
                setTimeout(() => {
                    SweetAlert({
                        title: "Good job!",
                        text: "Was successfully added",
                        icon: "success",
                        buttons: false,
                        timer: 1500
                    });
                }, 150);
                setVisible(false);
                dispatch({
                    type: 'ADD_COURSES',
                    course: {
                        ...res.data,
                        nguoiTao: {
                            hoTen: JSON.parse(localStorage.getItem("userAdmin")).hoTen
                        }
                    }
                })
            })
            .catch(err => {
                console.log(err)
                SweetAlert({
                    title: "Error",
                    text: 'Thêm khóa học đã bị lỗi',
                    icon: "error",
                    buttons: false,
                    timer: 1500
                });
            });
        }
    };
};

export const actDeleteCourses = id => {
    return dispatch => {
        if (authToken) {
            let headers = {
                Authorization: `Bearer ${authToken.accessToken}`
            };
            CallAPI(
                `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`,
                "DELETE",
                null,
                headers
            )
                .then(res => {
                    setTimeout(() => {
                        SweetAlert({
                            title: "Good job!",
                            text: `${res.data}!`,
                            icon: "success",
                            buttons: false,
                            timer: 1500
                        });
                    }, 150);
                    dispatch({
                        type: 'DELETE_COURSE',
                        payload: id
                    });
                })
                .catch(err =>{
                        SweetAlert({
                            title: "Error!",
                            text: "Khóa học đã được ghi danh",
                            icon: "error",
                            buttons: false,
                            timer: 1500
                        });
                    
                }
            );
        }
    }
}

export const actEditCourse = course =>{
    return dispatch=>{
        if (authToken){
            let headers = {
                Authorization: `Bearer ${authToken.accessToken}`
            };
            CallAPI("QuanLyKhoaHoc/CapNhatKhoaHoc", "PUT", course, headers)
            .then(res=>{
                setTimeout(() => {
                    SweetAlert({
                        title: "Good edit course!",
                        text: `${res.data}!`,
                        icon: "success",
                        buttons: false,
                        timer: 1500
                    });
                }, 150);
                dispatch({
                    type:'EDIT_COURSE',
                    payload:{
                        ...res.data,
                        nguoiTao: {
                            hoTen: JSON.parse(localStorage.getItem("userAdmin")).hoTen
                        }
                    }
                })
            })
            .catch(err=>{
                SweetAlert({
                    title: "Error!",
                    text: `${err.response.data}`,
                    icon: "error",
                    buttons: false,
                    timer: 1500
                });
            })
        }
    }
}

export const actGetCataLogCourse = ()=>{
    return dispatch=>{
        CallAPI("QuanLyKhoaHoc/LayDanhMucKhoaHoc", "GET", null, null)
        .then(res=>{
            dispatch({
                type:'GET_CATEGORYCOURSES',
                payload:res.data
            })
        })
        .catch(err=>console.log(err))
    }
}

export const actAddCart = khoahoc =>{
    console.log(khoahoc);
    return dispatch=>{
        dispatch({
            type:'ADD_CART',
            payload:khoahoc
        })
    }
}

export const actDeleteCart = khoahoc =>{
    return dispatch=>{
        dispatch({
            type:'DELETE_CART',
            payload:khoahoc
        })
    }
}

export const actDeleteAllCart = ()=>{
    return dispatch =>{
        dispatch({
            type:'DELETE_ALL',
        })
    }
}