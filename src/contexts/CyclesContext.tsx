import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import { addNewCycleAction, finishCurrentCycleAction, interruptCurrentCycleAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

type CyclesContextType = {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    ammountSecondsPassed: number
    setCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleData) => void
    interruptCurrentCycle: () => void
}
  
export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContextProvider({ children }: { children: ReactNode }) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null
    }, (initialState) => {
        const storageStateAsJson = localStorage.getItem('@ignite-timer:cycles-state-1.0.0');
        if(storageStateAsJson) {
            return JSON.parse(storageStateAsJson)
        }
        return initialState
    })
    const { cycles, activeCycleId } = cyclesState

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    const [ammountSecondsPassed, setAmmountSecondsPassed] = useState(() => {
        if(activeCycle){
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }
        return 0
    })


    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)
        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
    },[cyclesState])



    function setSecondsPassed(seconds: number){
        setAmmountSecondsPassed(seconds)
      }
    
    function setCurrentCycleAsFinished(){
        dispatch(finishCurrentCycleAction())
    }

    const createNewCycle = (data: CreateCycleData): void => {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount: data.minutesAmount,
          startDate: new Date()
        }
        dispatch(addNewCycleAction(newCycle))
        setAmmountSecondsPassed(0)
        //reset() // volta os campos do formulario para os do default values
    }
    
    const interruptCurrentCycle = () => {       
        dispatch(interruptCurrentCycleAction())
    }
    

    return (
        <CyclesContext.Provider value={{ 
            cycles,
            activeCycle, 
            activeCycleId, 
            ammountSecondsPassed, 
            setCurrentCycleAsFinished, 
            setSecondsPassed,
            createNewCycle,
            interruptCurrentCycle 
        }}>
            {children}
        </CyclesContext.Provider>
    )
}