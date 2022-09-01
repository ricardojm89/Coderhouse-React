import React from "react";
import { Component } from "react";

class Titulo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.valor}</h1>
            </div>
        )
    }
}

export default Titulo;