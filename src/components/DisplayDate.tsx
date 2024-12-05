import React, {useState} from "react";

const DisplayDate = () => {
    const [isShow, setIsShow] = useState(true);

    const now: Date = new Date();
    const date: string = `${now.getFullYear().toString()}/${now.getMonth() -1}/${now.getDate()}(${Dayofweek[now.getDay()]})`;
    const dateElement: HTMLElement | null = document.getElementById('date');
    if(dateElement){
        dateElement.textContent = date;
    }

    const handleIsShow = () => {
        setIsShow(!isShow);
    }

    return (
        <div className={`date ${isShow ? 'is-show' : ''}`}>

        </div>
    )
}