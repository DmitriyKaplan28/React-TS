import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on, setOn] = useState(false);

    return (
        <div className="appStyle">
            <UncontrolledOnOff onChange={setOn}/> {on.toString()}
            <OnOff on={on} setOn={setOn}/>

            <UncontrolledAccordion titleValue={"Menu"} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>

            <UncontrolledRating />
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion titleValue={"Users"} />*/}

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
