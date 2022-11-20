import { useState } from "react";
import { TSteps } from "../provider/types";


export const UseStep = (step: TSteps) => {
    const [currentState, setCurrentState] = useState<TSteps>(step)
    switch (step) {
        case 'STEP_WELCOM':
            
            break;
    
        default:
            break;
    }
}