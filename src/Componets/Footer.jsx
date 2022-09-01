import React, { Component } from "react";

class Footer extends Component {
    render () {
        return(
            <div className="row">
                <div className="col-md.12 bg-black text-white">
                    <p>{this.props.ubicacion} - {this.props.anio}</p>
                </div>
                <hr />
                
            </div>
        )
    }
}

export default Footer;

