import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import { products } from "../products"
import { useState } from "react";

export default function Store() {
    const [currentSwitch, setSwitch] = useState("view_list");
    const [currentData] = useState(products);

    const switchCase = () => {
        const state = currentSwitch;
        setSwitch(state === 'view_list' ? 'view_model' : 'view_list')
    }
    return (
        <><IconSwitch
            icon={currentSwitch}
            onSwitch={switchCase} />
            {currentSwitch === 'view_list' ? <CardsView cards={currentData} /> : <ListView item={currentData} />}
        </>
    );
}