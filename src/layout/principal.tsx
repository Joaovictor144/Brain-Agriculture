import { ReactNode } from "react";
import { NavBar } from "../components/Navbar";

export const PrincipalLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
    <NavBar/>
    {children}
    </>
  )
}