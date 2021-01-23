import React, { Component } from 'react';
import { connect } from 'react-redux';

class FormSinhVien extends Component {

    state = {
        values: {
            maSV: '',
            hoTen: '',
            soDT: '',
            email: ''
        },
        errors: {
            maSV: '',
            hoTen: '',
            soDT: '',
            email: ''   
        },
        valid: false

    }
    handleChange = (e) => {
        // Lấy giá trị mỗi lần value input thay đổi bởi người dùng
        let tagInput = e.target;
        let { name, value, type } = tagInput;
        let errorMessage = '';

        //Kiểm tra rỗng
        if(value.trim() ==='') // kiểm tra bất kì control input nào người dùng nhập vào
        {
            errorMessage = name + 'Không được để trống !'
        }

        // Kiểm tra Email
        if(type === 'email'){
            const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (!regex.test(value)){
                errorMessage = name + ' không hợp lệ !'
            }
        }

        let values = {...this.state.values,[name]:value} // cập nhật giá trị values trong state
        let errors = {...this.state.errors,[name]:errorMessage};  // cập nhật lỗi cho state

        this.setState({
            ...this.state,
            values: values,
            errors: errors
        }, () => {
            console.log(this.state);
            this.checkValid();
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); // cản sự submit reload trang của browser
        this.props.themSinhVien(this.state.values);
    }

    checkValid = () => {
        let valid = true;
        for(let key in this.state.errors){
            if(this.state.errors[key] !== '' || this.state.values[key] ===''){
                valid= false;
            }
        }
        if(valid){
            let flag = false;
            for(let key in this.state.values){
                if(this.state.values[key] !== ''){
                    flag = true;
                }
            } 
            if(!flag){
                valid = false;
            }
        }
        this.setState({
            ...this.state,
            valid:valid
        })
    }

    render() {
        return (
            <div classname="container">
                <div className="card text-left">
                    <div className="card-header bg-dark text-white"><h3>Thông Tin Sinh Viên</h3></div>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Mã Sinh Viên</span>
                                    <input className="form-control" type="text" name="maSV" value={this.state.values.maSV} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.maSV}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Tên Sinh Viên</span>
                                    <input className="form-control" type="text" name="hoTen" value={this.state.values.hoTen} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.hoTen}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <span>Số Điện Thoại</span>
                                    <input className="form-control" type="text" name="soDT" value={this.state.values.soDT} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.soDT}
                                    </p>
                                </div>
                                <div className="form-group col-6">
                                    <span>Email</span>
                                    <input className="form-control" type="email" name="email" value={this.state.values.email} onChange={this.handleChange} />
                                    <p className="text-danger">
                                        {this.state.errors.email}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    {this.state.valid ? <button className="btn btn-success" type="submit">Thêm Sinh Viên</button> : <button className="btn btn-success" type="submit" disabled>Thêm Sinh Viên</button> }
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        themSinhVien: (sinhVien) => {
            const action = {
                type: 'THEM_SINH_VIEN',
                sinhVien
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(FormSinhVien)

