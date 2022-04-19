import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

    return (
        <div className="appStyle">
            <OnOff />

            <UncontrolledAccordion titleValue={"Menu"} />
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}/>

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
