import React, { Component } from 'react';
import ThongTinGame from './ThongTinGame';
import XucXac from './XucXac';
import { connect } from 'react-redux';
import './BTGameTaiXiu.css';

class BTGameTaiXiu extends Component {
    render() {
        return (
            <div className="container bgGame">
                <h1 className="text-center tenGame">Game Tài Xỉu</h1>
                <div className="row">
                    <div className="col-3">
                        <img onClick={() => { this.props.datCuoc(true) }} src="./img/imgGame/tai.PNG" alt="tai.png" className="hoverTai" />
                    </div>
                    <div className="col-6">
                        <XucXac />
                        <ThongTinGame />
                        <img onClick={() => { this.props.playGame() }} className="xoc m-2" src="./img/imgGame/mo.PNG" alt="mo.png" />
                    </div>
                    <div className="col-3">
                        <img onClick={() => { this.props.datCuoc(false) }} src="./img/imgGame/xiu.PNG" alt="xiu.png" className="hoverXiu"/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datCuoc: (taiXiu) => {
            let action = {
                type: 'DAT_CUOC',
                taiXiu
            }
            dispatch(action);
        },
        playGame: () => {
            let action = {
                type: 'XOC'
            }
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(BTGameTaiXiu)