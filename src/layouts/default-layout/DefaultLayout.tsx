import { Outlet } from "react-router-dom"
import { Header } from "../../components/header/Header"
import { LayoutContainer } from "./DefaultLayout.styles"

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
        <Header />
        <Outlet />
    </LayoutContainer>
  )
}
