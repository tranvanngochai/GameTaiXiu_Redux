import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {

    renderXucXac = () => {
        return this.props.mangXucXac.map((xucXac,index) => {
            return <img key={index} style={{width:80, height:80}} src={xucXac.hinhAnh} alt={xucXac.hinhAnh}/>
        })
    }

    render() {
        return (
            <div className="imgXucXac">
               {this.renderXucXac()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangXucXac: state.GameTaiXiuReducer.mangXucXac
    }
}


export default connect(mapStateToProps) (XucXac)