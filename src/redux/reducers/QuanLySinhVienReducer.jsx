const stateDefault = {
    mangSinhVien: [{maSV:1, hoTen:'Nguyễn Văn A',soDT:'0123456789',email:'abc@gmail.com'}]
}

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN':{
            //thêm dữ liệu sinh viên vào mangSinhVien
            const mangSVUpdate = [...state.mangSinhVien,action.sinhVien];
            state.mangSinhVien = mangSVUpdate;
            return {...state}
        };break;
        default: {
            return {...state}
        }
    }
}