import React from "react";
import { Component } from "react";

class Item extends Component {
    render() {
        return (
            <div>
                <a href="#">{this.props.valor}</a>
            </div>
        )
    }
}

export default Item;