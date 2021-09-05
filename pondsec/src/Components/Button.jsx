import React from 'react'


function Button(props) {
    const styleObject ={
        padding: ".8em 2em",
        width: '13em',
        border: "1px solid transparent",
        borderRadius: "1.4rem",
        cursor: 'pointer'
    }
    return (
        <>
            <button onClick={props.onClick} className={props.className} style={styleObject}>
                 {props.children}
            </button>
        </>
    )
}

export default Button
