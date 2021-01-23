import React, { Component } from 'react'
import data from "../../../data/phoneData.json"
import SanPhamRedux from './SanPhamRedux'

export default class DanhSachSanPhamRedux extends Component {

    // Phương thức render sản phẩm
    renderSanPham = () => {
        return data.map((sanPham, index) => {
            return <div className="col-3" key={index}>
                <SanPhamRedux sanPham={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div className="container">
                <h3 className="text-danger text-center">Danh Sách Sản Phẩm</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
