import { GlobalContextProvider } from "./context/GlobalContext"
import { GlobalStyle } from "./style/GlobalStyle"
import { Routes } from "./routes"

function App() {
 
  return (
      <GlobalContextProvider>
        <GlobalStyle/>
        <Routes />
      </GlobalContextProvider>

  )
}

export default App
