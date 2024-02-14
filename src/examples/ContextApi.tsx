import { createContext, useContext, useState } from "react"


const CyclesContext = createContext({} as any)

const NewCycleForm = () => {
    const { activeCycle } = useContext(CyclesContext)
    return <h1>NewCycleForm: {activeCycle}</h1>
}

const Countdown = () => {
    const { activeCycle, setActiveCycle } = useContext(CyclesContext)
    return (
        <div>
            <h1>Countdown: {activeCycle}</h1>
            <button onClick={() => setActiveCycle((state: any) => state + 1)}>click</button>
        </div>
    )
}

export const HomeExample = () => {
    const [activeCycle, setActiveCycle] = useState(1) 

    return (
        <div>
            <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
                <NewCycleForm />
                <Countdown />
            </CyclesContext.Provider>
        </div>
    )
}
