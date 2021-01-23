import React, { Component } from 'react'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'
import ModalGioHangRedux from './ModalGioHangRedux'

export default class BTGioHangRedux extends Component {
    render() {
        return (
            <div className="comtainer">
                <h3 className="text-danger text-center">Bài Tập Giỏ Hàng Redux</h3>
                <ModalGioHangRedux/>
                <DanhSachSanPhamRedux/>
            </div>
        )
    }
}
