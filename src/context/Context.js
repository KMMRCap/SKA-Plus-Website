import React, { createContext, useState } from "react";

export const Contexts = createContext({
    plan: '', setPlan: () => { },
    type: '', setType: () => { },
    color: '', setColor: () => { }
});

export const ContextWrapper = (props) => {

    const [plan, setPlan] = useState('');
    const [type, setType] = useState('');
    const [color, setColor] = useState('');

    return (
        <Contexts.Provider value={
            {
                plan, setPlan,
                type, setType,
                color, setColor
            }
        }>
            {props.children}
        </Contexts.Provider>
    )
}