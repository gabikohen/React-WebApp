import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom'
const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium','btn--large']

 export const Button = ({children,type,onclick,buttonStyle,buttonSize}) => {
    

    const checkbuttonStyle = STYLES.includes(buttonStyle)? buttonStyle:STYLES[0];

    const checkbuttonSize = SIZES.includes(buttonSize) ? buttonSize :SIZES[1];

    return (
        <>
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkbuttonStyle} ${checkbuttonSize}`} onClick={onclick} type={type}>
                {children}
            </button>
           
        </Link>
             
           </>
    )
}
