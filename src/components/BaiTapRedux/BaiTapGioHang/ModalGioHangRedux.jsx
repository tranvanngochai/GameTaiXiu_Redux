import React, { Component } from 'react'

//kết nối redux, connect component với store
import { connect } from 'react-redux'

class ModalGioHangRedux extends Component {
    // this.props.gioHang là thuộc tính nhận từ redux

    renderGioHang = () => {
        return this.props.gioHang.map((spGH, index) => {
            return <tr key={index}>
                <td>{spGH.maSP}</td>
                <td>{spGH.tenSP}</td>
                <td> <img src={spGH.hinhAnh} width={50} height={100} /> </td>
                <td>{spGH.giaBan}</td>
                <td><button onClick={() => this.props.tangGiamSoLuong(index, false)}>-</button>{spGH.soLuong} <button onClick={() => this.props.tangGiamSoLuong(index, true)}>+</button> </td>
                <td>{spGH.soLuong * spGH.giaBan}</td>
                <td><button onClick={() => this.props.xoaGioHangIndex(index)} className="btn btn-danger">Xóa Theo Index</button></td>
                <td><button onClick={() => this.props.xoaGioHangMaSP(spGH.maSP)} className="btn btn-danger">Xóa Theo MaSP</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Hình Ảnh</th>
                            <th>Giá Bán</th>
                            <th>Số Lượng</th>
                            <th>Thành Tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5"></td>
                            <td>Tổng Tiền</td>
                            <td>{this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                                return tongTien += spGioHang.soLuong * spGioHang.giaBan;
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => { // state là store tổng => truy xuất đến gioHangReducer
    return {
        gioHang: state.GioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHangIndex: (index) => {
            const action = {
                type: 'XOA_GIO_HANG',
                index
            }
            dispatch(action);
        },
        xoaGioHangMaSP: (maSP) => {
            const action = {
                type: 'XOA_GIO_HANG_MaSP',
                maSP
            }
            dispatch(action);
        },
        tangGiamSoLuong: (index, tangGiam) => {
            const action = {
                type: 'TANG_GIAM_SL',
                index,
                tangGiam
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux)
