import { ReactNode, createContext, useReducer, useState } from "react"

interface Cycle {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
}  

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
    const [cycles, dispatch] = useReducer((state: Cycle[], action: any) => {
        if(action.type === 'ADD_NEW_CYCLE') {
            return [...state, action.payload.newCycle]
        }
        return state
    }, [])

    const [ammountSecondsPassed, setAmmountSecondsPassed] = useState(0)
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)


    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    function setSecondsPassed(seconds: number){
        setAmmountSecondsPassed(seconds)
      }
    
    function setCurrentCycleAsFinished(){
        // setCycles(state => state.map(cycle => {
        //     if(cycle.id === activeCycleId){
        //     return {...cycle, finishedDate: new Date()}
        //     } else {
        //     return cycle
        //     }
        // }))
        dispatch({
            type: 'SET_CURRENT_CYCLE_AS_FINISHED',
            payload: {
                activeCycleId
            }
        })
    }

    const createNewCycle = (data: CreateCycleData): void => {
        const id = String(new Date().getTime())
        const newCycle: Cycle = {
          id,
          task: data.task,
          minutesAmount: data.minutesAmount,
          startDate: new Date()
        }
        dispatch({
            type: 'ADD_NEW_CYCLE',
            payload: {
                newCycle
            }
        })
        // setCycles((state) => [...state, newCycle])
        setActiveCycleId(id)
        setAmmountSecondsPassed(0)
        //reset() // volta os campos do formulario para os do default values
      }
    
    const interruptCurrentCycle = () => {
        setActiveCycleId(null)
        // setCycles(state => state.map(cycle => {
        //     if(cycle.id === activeCycleId){
        //         return {...cycle, interruptedDate: new Date()}
        //     } else {
        //         return cycle
        //     }
        // }))
        dispatch({
            type: 'INTERRUPT_CURRENT_CYCLE',
            payload: {
                activeCycleId
            }
        })
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