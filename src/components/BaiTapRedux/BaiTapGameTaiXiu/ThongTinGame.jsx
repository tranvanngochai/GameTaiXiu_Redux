import React, { Component } from 'react';
import {connect} from 'react-redux';
import './BTGameTaiXiu.css';

class ThongTinGame extends Component {
    render() {
        return (
            <div className="container fullThongTin ">
                <div className="thongTin mt-1">Bạn Chọn : <span className="text-danger">{this.props.taiXiu ? 'Tài' : 'Xỉu'}</span></div>
                <div className="thongTin">Bàn Thắng : <span className="text-success">{this.props.soBanThang}</span></div>
                <div className="thongTin"> Tổng Số Bàn Chơi : <span className="text-success">{this.props.tongSoBanChoi}</span></div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        soBanThang: state.GameTaiXiuReducer.soBanThang,
        taiXiu: state.GameTaiXiuReducer.taiXiu,
        tongSoBanChoi: state.GameTaiXiuReducer.tongSoBanChoi
    }
}

export default connect(mapStateToProps)(ThongTinGame)