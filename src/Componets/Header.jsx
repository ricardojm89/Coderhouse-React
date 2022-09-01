import React from "react";

const Header = ({props}) => {
    
    return(
        <div className="row">
            <div className="col-md-12 bg-light text-black p-3">
                <h1>{props.curso} {props.tipo}</h1>
            </div>
        </div>
    )
}

export default Header;