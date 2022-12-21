import React from "react";
import style from "./list.module.scss"

export type Data = {
    title: string,
    subTexts: { key: string, icon: string, property: string, value: string }[],
}

interface Props {
    data?: Data[]
}

const List: React.FC<Props> = ({data}) => {
    return (
        <section className={style.tableContainer}>
            {data && data?.map((item, index) => {
                return (
                    <div className={style.row} key={index}>
                        <div className={style.title}>
                            {item.title}
                        </div>
                        <div className={style.subTexts}>
                            {item.subTexts && item.subTexts.map((subText) => {
                                return (
                                    <div key={subText.key} className={style.subText}>
                                        <img src={subText.icon}/>
                                        <span>{subText.property && (
                                            <>{subText.property} : </>
                                        )}</span>
                                        <p>{subText.value}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default List
