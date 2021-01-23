import logo from './logo.svg';
import './App.css';
import BTGioHangRedux from './components/BaiTapRedux/BaiTapGioHang/BTGioHangRedux';
import BTGameTaiXiu from './components/BaiTapRedux/BaiTapGameTaiXiu/BTGameTaiXiu';
import BaiTapForm from './components/BaiTapRedux/BaiTapFormValidation/BaiTapForm';


function App() {
  return (
    <div className="App">
      {/* <BTGioHangRedux/> */}
      <BTGameTaiXiu/>
      {/* <BaiTapForm/> */}
    </div>
  );
}

export default App;
