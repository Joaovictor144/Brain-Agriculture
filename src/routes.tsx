import { BrowserRouter, Route, Routes as RoutesReactRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Producers } from "./pages/Producers/";

export const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesReactRouter>
        <Route index Component={Home} />
        <Route path="/produtores" Component={Producers}/>
      </RoutesReactRouter>
    </BrowserRouter>
  )
}
