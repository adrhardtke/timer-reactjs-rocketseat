import { Cycle } from "./reducer";

export enum ActionTypes {
    ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
    SET_CURRENT_CYCLE_AS_FINISHED = "SET_CURRENT_CYCLE_AS_FINISHED",
    INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE"
} 

export function addNewCycleAction(newCycle: Cycle) {
    return ({
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    })
}

export function interruptCurrentCycleAction(){
    return ({
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
    })
}

export function finishCurrentCycleAction(){
    return ({
        type: ActionTypes.SET_CURRENT_CYCLE_AS_FINISHED
    })
}