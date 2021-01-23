import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableSinhVien extends Component {

    renderSinhVien = () => {
        const {mangSinhVien} = this.props;
        return mangSinhVien.map((sinhVien,index) => {
            return (
                <tr key={index}>
                    <td>{sinhVien.maSV}</td>
                    <td>{sinhVien.hoTen}</td>
                    <td>{sinhVien.soDT}</td>
                    <td>{sinhVien.email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr className="bg-dark text-white">
                            <th>Mã Sinh Viên</th>
                            <th>Họ Tên</th>
                            <th>Số Điện Thoại</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps,null)(TableSinhVien)
