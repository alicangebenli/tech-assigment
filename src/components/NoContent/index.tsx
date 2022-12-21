import style from "./nocontent.module.scss";
import React from "react";

interface Props {
    text: string
}

const NoContent: React.FC<Props> = ({text}) => {
    return (
        <div className={style.noContentContainer}>
            {text}
        </div>
    )
}


export default React.memo(NoContent);

