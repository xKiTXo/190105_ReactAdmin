import React from 'react';

import './index.less'


export const LinkButton =(props)=>{
    return <button {...props} className='link-button'>{props.children}</button>
}