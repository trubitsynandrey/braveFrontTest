import React from 'react'
import styles from './Buttonshow.module.css'

const Buttonshow = (props) => {
    return (
        <>
            <button 
                id={styles.showMe}
                type={props.type || 'button'}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </>
    )
}

export default Buttonshow
