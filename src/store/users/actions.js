import { CallAPI } from "../../ultis/api";

export const actOnUpdateUser = user => {
  console.log(user);
  return dispatch => {
    dispatch({
      type: 'UPDATE_USER',
      payload: user
    });
  };
}

export const actOnLogOut = user => {
  return dispatch => {
    dispatch({
      type: 'LOG_OUT',
      payload: user
    })
  }
}

export const actLoginAdmin = (user, history) => {
  console.log(user, history);
  return dispatch =>{
    CallAPI(
      "QuanLyNguoiDung/DangNhap",
      "POST",
      user,
      null
    )
    .then(res=>{
      if (res.data.maLoaiNguoiDung === "GV") {
        localStorage.setItem('userAdmin',JSON.stringify(res.data));
        history.push('/admin/dash-board');
        dispatch({
          type:'LOGIN_ADMIN',
          payload:''
        })
      }else{
        window.alert('bạn ko thể đăng nhập')
      }
    })
    .catch(err=>console.log(err))
  }
}