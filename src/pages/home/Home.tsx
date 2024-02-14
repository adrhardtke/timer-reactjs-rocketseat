import { HandPalm, Play } from "@phosphor-icons/react"
import { HomeContainer, StartCountdownButton, StopCountdownButton } from "./Home.styles"
import { NewCycleForm } from "./components/NewCycleForm"
import { Countdown } from "./components/Countdown"

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"

// interface NewCyleFormData {
//   task: string
//   minutesAmount: number
// }


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60)
})

type NewCyleFormData = zod.infer<typeof newCycleFormValidationSchema>


export const Home = () => {
  const { activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)
  const newCycleForm = useForm<NewCyleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
        task: '',
        minutesAmount: 0
    }
  })
  const { handleSubmit, watch, reset } = newCycleForm

  const handleCreateNewCycle = (data: NewCyleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisabled = !task


  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <Countdown />       
          {activeCycle ? (
             <StopCountdownButton type="button" onClick={interruptCurrentCycle}>
                <HandPalm size={24} />
                Interromper
            </StopCountdownButton>
          ): (
            <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
              <Play size={24} />
              Começar
          </StartCountdownButton>
          )}
      </form>
    </HomeContainer>
  )
}
