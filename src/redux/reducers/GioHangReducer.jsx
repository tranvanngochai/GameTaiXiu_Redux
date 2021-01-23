const stateGioHang = {
  gioHang: [
  ]
}

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case 'THEM_GIO_HANG': {
      let gioHangCapNhat = [...state.gioHang]
      let index = gioHangCapNhat.findIndex(spGH =>
        spGH.maSP === action.spGioHang.maSP);
      if (index !== -1) {
        gioHangCapNhat[index].soLuong += 1;
      }
      else {
        gioHangCapNhat.push(action.spGioHang);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    };break;
    case 'XOA_GIO_HANG': {
      let gioHangCapNhat = [...state.gioHang];
      //xóa giở hàng dựa vào index
      gioHangCapNhat.splice(action.index, 1);
      // gán giỏ hàng mới cho state.gioHang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    };break;
    case 'XOA_GIO_HANG_MaSP': {
      let gioHangCapNhat = [...state.gioHang];
      // tìm index của sản phẩm dựa vào mã sản phẩm
      let index = gioHangCapNhat.findIndex(spGH => spGH.maSP === action.maSP)
      if (index !== -1) {
        gioHangCapNhat.splice(action.index, 1);
      }
      // gán giỏ hàng mới cho state.gioHang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    };break;
    case 'TANG_GIAM_SL': {
      const {index,tangGiam} = action;
      let gioHangCapNhat = [...state.gioHang];
      if (tangGiam) {
        gioHangCapNhat[index].soLuong += 1;
      }
      else{
        if (gioHangCapNhat[index].soLuong > 1){
          gioHangCapNhat[index].soLuong -= 1;
        }
      }
      state.gioHang = gioHangCapNhat;
      return {...state};
    };break
    default: {
      return { ...state }
    };break;
  }
}
