import styled from "styled-components"

export const FormContainer = styled.div(({theme}) => ({
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '0.5rem',
    color: theme["gray-100"],
    fontSize: "1.125rem",
    fontWeight: 'bold',
    flexWrap: 'wrap'
}))

const BaseInput = styled.input(({theme}) => ({
    backgroundColor: 'transparent',
    height: '2.5rem',
    border: 0,
    borderBottom:`2px solid ${theme["gray-500"]}`,
    fontWeight: 'bold',
    fontSize: '1.125rem', // inherit erda do container pai, por default o input n erda
    padding: '0 0.5rem',
    color: theme["gray-100"],
    '&::placeholder': {
        color: theme["gray-500"]
    },
    '&:focus': {
       boxShadow: 'none',
       borderColor: theme["green-500"]
    }
}))
export const TaskInput = styled(BaseInput)(({theme}) => ({
    flex: '1',
    '::placeholder': {
        color: theme["gray-500"]
    },
    '&::-webkit-calendar-picker-indicator': {
        display: 'none !important'
    }
}))
export const MinutesAmountInput = styled(BaseInput)(({theme}) => ({
    width: '4rem',
    textAlign: 'center',
    '::placeholder': {
        color: theme["gray-500"]
    }
}))