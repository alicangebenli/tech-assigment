import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../state/store";
import {getCustomerAsync} from "../../features/customerSlice";
import Search from "../../components/SearchBox"
import List from "../../components/List";
import style from "./home.module.scss"
import {Data} from "../../components/List";
import dataConverter from "./utils/dataConverter";
import NoContent from "../../components/NoContent";

interface Props {
}

const HomeScreen: React.FC<Props> = () => {
    let timeout: NodeJS.Timeout;
    const dispatch = useAppDispatch();
    //States
    const customers = useAppSelector((state) => state.customer.Customers);
    const [listData, setListData] = useState<Data[]>([] as Data[]);
    const [searchedText, setSearchedText] = useState<string>('');
    const [loading, setLoading] = useState(false);

    //Hooks
    useEffect(() => {
        if (customers.length === 0) {
            dispatch(getCustomerAsync())
        }
    }, []);
    useEffect(() => {
        const data: Data[] = dataConverter(customers)

        setListData(data);
    }, [customers])
    useEffect(() => {
        setLoading(() => true)
        const data = customers.filter(x => {
            const regex = new RegExp("^" + searchedText, "g");
            return !!x.policyNo.match(regex) || !!x.name.match(searchedText)
        })
        setListData(dataConverter(data));
        setLoading(() => false)
    }, [searchedText])

    //Functions
    const onChangeHandle = (value: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSearchedText(value)
        }, 300);
    }
    return (
        <div className={style.homeContainer}>
            <header>Tech Example</header>
            <Search onChangeInput={onChangeHandle}/>
            {!!listData.length && <List data={listData}/>}
            {!listData.length && !loading && <NoContent text="No results found." />}
            {loading && <NoContent text="Loading..." />}
        </div>
    );
}

export default HomeScreen;
