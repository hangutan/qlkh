import React from 'react';

function ItemThanhToan({khoaHoc}){
    return(
        <div
        className="item my-1"
        onClick={() => {
          this.chiTietKhoaHoc();
        }}
      >
        <div className="media">
          <img className="img" src={khoaHoc.hinhAnh} alt="" />
          <div className="media-body">
            <span className="name-course">{khoaHoc.tenKhoaHoc}</span>
            <br />
            <span className="text-success">$10.00</span>
          </div>
        </div>
      </div>
    )
}
export default ItemThanhToan;