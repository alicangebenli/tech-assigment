import React from "react";
import style from "./search.module.scss"
import icons from "../../resources/icons"
import Input from "../Input";

interface Props {
    onChangeInput?: (value: string) => void
}

const SearchBox: React.FC<Props> = ({onChangeInput}) => {
    return (
        <section className={style.searchContainer}>
            <img className={style.icon} src={icons.searchIcon}/>
            <div className={style.input}>
                <Input onChange={(e) => {
                    if (onChangeInput) {
                        onChangeInput(e?.target?.value || '')
                    }
                }}/>
            </div>
        </section>
    )
}

export default SearchBox
