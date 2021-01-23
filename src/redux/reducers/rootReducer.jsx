import {combineReducers} from 'redux';
import GameTaiXiuReducer from './GameTaiXiuReducer';
import {GioHangReducer} from './GioHangReducer'; 
import { QuanLySinhVienReducer } from './QuanLySinhVienReducer';

//store tổng ứng dụng
export const rootReducer = combineReducers({
    // nơi chứa các reducer con
    GioHangReducer : GioHangReducer,
    GameTaiXiuReducer : GameTaiXiuReducer,
    QuanLySinhVienReducer : QuanLySinhVienReducer
})