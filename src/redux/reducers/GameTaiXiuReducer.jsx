const stateDefault = {
    taiXiu: true,  // Xiu: 3-> 11, Tài: 12 trở lên
    mangXucXac: [
        {ma:1,hinhAnh:'./img/imgGame/1.PNG'},
        {ma:1,hinhAnh:'./img/imgGame/1.PNG'},
        {ma:1,hinhAnh:'./img/imgGame/1.PNG'}
    ], 
    soBanThang: 0,
    tongSoBanChoi: 0
}

const GameTaiXiuReducer = (state=stateDefault,action) => {
    switch (action.type) {
        case 'DAT_CUOC':
            state.taiXiu = action.taiXiu;
            return {...state}
        
        case 'XOC':{
            //bước 1: random xúc xắc
            let mangXucXacNgauNhien = [];
            for(let i=0; i<3;i++){
                // mỗi lần lặp random ra 1 số ngẫu nhiên từ 1->6
               let soNgauNhien = Math.floor(Math.random() * 6) + 1;
               // Tạo ra xúc xắc từ số ngẫu nhiên
               let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh:`./img/imgGame/${soNgauNhien}.PNG`};
               // push vào mảng xúc xắc ngẫu nhiên
               mangXucXacNgauNhien.push(xucXacNgauNhien);
            }
            // Gán state mangXucXac = mangXucXacNgauNhien
            state.mangXucXac = mangXucXacNgauNhien;
            // xử lí tăng bàn chơi
            state.tongSoBanChoi += 1;
            // Xử lí tổng số bàn thắng 
            let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem,xucXac,index) => {
                return tongDiem += xucXac.ma;
            },0);
            if((tongSoDiem > 11 && state.taiXiu === true) || (tongSoDiem <= 11 && state.taiXiu === false)){
                state.soBanThang += 1;
            }
            return {...state}
        }

        default : return {...state}
    }
}

export default GameTaiXiuReducer;