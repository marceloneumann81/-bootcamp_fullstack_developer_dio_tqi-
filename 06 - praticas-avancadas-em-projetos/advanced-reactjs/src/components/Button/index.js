import React from "react";
import PropTypes from 'prop-types';

function Button(props) {

    const {children, onClick} = props

    return(
        <>
        <div>
            <button        
            onClick={onClick}
            >
                {children}

            </button>
        </div>
        <br />
        
        </>

    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
  }

export default Button