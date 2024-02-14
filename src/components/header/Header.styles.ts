import styled from 'styled-components'

export const HeaderContainer =  styled.header(({theme}) => ({
   display: 'flex',
   justifyContent: 'space-between',

   'nav': {
        display: 'flex',
        gap: '0.5rem',

        'a': {
            width: '3rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: theme['gray-100'],
            borderTop: '3px solid transparent',
            borderBottom: '3px solid transparent',

            '&:hover': {
                borderBottom: `3px solid ${theme['green-500']}`
            },

            '&.active': {
                color: theme['green-500']
            }
        }
   }
}))