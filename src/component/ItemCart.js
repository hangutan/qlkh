import React,{useState} from 'react';
import {MdDelete} from 'react-icons/md';
import * as actionCourse from '../store/courses/actions';
import { useDispatch } from 'react-redux';

const ItemCart=({khoaHoc})=>{
    const dispatch = useDispatch();
    const [count]=useState(10);
    const handleDelete =()=>{
        dispatch(actionCourse.actDeleteCart(khoaHoc));
    }
    return(
        <tr key={khoaHoc.maKhoaHoc}>
            <td className="border-0">
                <div className="p-2 d-flex">
                <img
                    src={khoaHoc.hinhAnh}
                    width={70}
                    className="img-fluid rounded shadow-sm"
                    // onClick={() => {
                    // this.chiTietKhoaHoc();
                    // }}
                    alt=""
                />
                <div className="ml-3 d-inline-block align-middle info">
                    <h5 className="mb-0">
                    <div
                        className="text-dark d-inline-block align-middle"
                        onClick={() => this.chiTietKhoaHoc()}
                    >
                        {khoaHoc.tenKhoaHoc}
                    </div>
                    </h5>
                    <span className="text-muted font-weight-normal d-block">
                    Category: {khoaHoc.moTa}
                    </span>
                </div>
                </div>
            </td>
            <td className="border-0 align-middle">
                <strong>${count}.00</strong>
            </td>
            <td className="border-0 align-middle">
                <MdDelete 
                    className="icon-delete"
                    onClick={()=>handleDelete(khoaHoc)}
                />
            </td>
        </tr>
    )
}

export default ItemCart;