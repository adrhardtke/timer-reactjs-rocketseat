import { HeaderContainer } from "./Header.styles"
import Logo from '../../assets/ignite-logo.svg'
import { Scroll, Timer } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <nav>
        <NavLink to="/" title="timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="historico" title="historico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
