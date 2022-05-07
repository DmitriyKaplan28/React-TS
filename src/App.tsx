import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState(false);

    return (
        <div className="appStyle">
            <OnOff on={on} setOn={setOn}/>

            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} items={[{title:'1user', value: 1},{title:'2user', value: 2},{title:'3user', value: 3},{title:'4user', value: 4}]} onClick={()=>{}} />

            <Rating value={ratingValue} onClick={setRatingValue}/>

        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>
}



export default App;
