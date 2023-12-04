import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

type Farmer = {
  id: number;
  documentType: string;
  document: string;
  name: string;
  farmName: string;
  city: string;
  state: string;
  areaInHectares: any;
  arableAreaInHectares: any;
  vegetationAreaInHectares: any;
  plantedCrops: string[];
};

interface IGlobalContext {
  ruralProducer: Farmer[];
  setRuralProducer: any;
}



const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext);

const GlobalContextProvider = ({children}: { children: ReactNode}) => {
  const [ruralProducer, setRuralProducer] = useLocalStorage('produtores', [{
    id: 1,
    documentType: "CPF",
    document: "988.523.881-68",
    name: "Leonardo Alexandre Gomes",
    farmName: "Fazenda 3 ranchos",
    city: "Abadia de Goiás",
    state: "Goiás",
    areaInHectares: 10,
    arableAreaInHectares: 8,
    vegetationAreaInHectares: 2,
    plantedCrops: ["Soja",  "Milho", "Cafe"]
  },
  {
    id: 2,
    documentType: "CPF",
    document: "221.699.261-51",
    name: "Calebe Raimundo Nathan Ferreira",
    farmName: "Fazenda Nelori",
    city: "Abadia de Goiás",
    state: "Goiás",
    areaInHectares: 15,
    arableAreaInHectares: 12,
    vegetationAreaInHectares: 3,
    plantedCrops: ["Soja",  "Milho"]
  }
]);
  return(
    <>
    <GlobalContext.Provider value={{ruralProducer, setRuralProducer}}>
      {children}
    </GlobalContext.Provider>
    </>
  )
}

const useGlobalContext = () =>{
  return useContext(GlobalContext)
}

export {GlobalContextProvider, useGlobalContext}