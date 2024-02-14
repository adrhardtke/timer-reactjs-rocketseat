import styled from "styled-components"

export const HomeContainer = styled.main`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`


export const BaseCountdownButton = styled.button(({theme}) => ({
    width: "100%",
    border: 0,
    padding: '1rem',
    borderRadius: '8px',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: "bold",
    color: theme["gray-100"],
    cursor: "pointer",   

    '&:disabled': {
        opacity: '0.7',
        cursor: 'not-allowed'
    }
}))

export const StartCountdownButton = styled(BaseCountdownButton)(({theme}) => ({
    backgroundColor: theme["green-500"],

    '&:not(:disabled):hover': {
        background: theme["green-700"]
    },
}))


export const StopCountdownButton = styled(BaseCountdownButton)(({theme}) => ({
    backgroundColor: theme["red-500"],

    '&:not(:disabled):hover': {
        background: theme["red-700"]
    },
}))