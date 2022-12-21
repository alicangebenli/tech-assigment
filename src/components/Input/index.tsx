import style from "./input.module.scss";
import React from "react";

interface Props {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<Props> = ({onChange}) => {
    return (
        <input className={style.inputContainer} type="text" onChange={onChange}/>
    )
}


export default Input;

