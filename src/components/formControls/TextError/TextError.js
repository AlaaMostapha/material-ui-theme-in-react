import React from 'react'
import './TextError.scss';
function TextError(props) {
    return (
        <div className="error">
            {console.log(props)}
            {props.children}
        </div>
    )
}

export default TextError
