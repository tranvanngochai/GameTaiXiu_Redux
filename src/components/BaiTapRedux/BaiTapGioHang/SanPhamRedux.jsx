import React, { Component } from 'react';
import { connect } from 'react-redux';

class SanPhamRedux extends Component {
    render() {
        const { sanPham } = this.props;
        return (
            <div>
                <div class="card text-white bg-primary">
                    <img class="card-img-top" src={sanPham.hinhAnh} width={100} height={250} />
                    <div class="card-body">
                        <h4 class="card-title">{sanPham.tenSP}</h4>
                        <p class="card-text">{sanPham.giaBan}</p>
                        <button onClick={() => {this.props.themGioHang(sanPham)}}>Thêm Giỏ Hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}

// Hàm đưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
    return{
        // tạo ra props component (là function đưa dữ liệu lên sotre)
        themGioHang: (sanPham) => {
            const spGioHang = {
                maSP: sanPham.maSP,
                tenSP:sanPham.tenSP,
                hinhAnh:sanPham.hinhAnh,
                soLuong:1,
                giaBan:sanPham.giaBan
            }
            // Tạo một action đưa dữ liệu lên reducer
            const action = {
                type: 'THEM_GIO_HANG', // bắt buộc đặt tên type
                spGioHang: spGioHang // nội dung gửi lên reucer
            }
            // dùng dispatch đưa dữ liệu action lên reducer
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps) (SanPhamRedux)