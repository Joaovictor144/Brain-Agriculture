import { useGlobalContext } from "../../context/GlobalContext";
import { PrincipalLayout } from "../../layout/principal";
import { Charts } from "./components/Charts"
import * as S from "./styles";

export const Home = () => {
  const { ruralProducer } = useGlobalContext();

  const totalFarms = ruralProducer.length;
  const totalFarmArea = ruralProducer.reduce((total, farmer) => total + parseFloat(farmer.areaInHectares), 0)
  const totalArableArea = ruralProducer.reduce((total, farmer) => total + parseFloat(farmer.arableAreaInHectares), 0);
  const totalVegetationArea = ruralProducer.reduce((total, farmer) => total + parseFloat(farmer.vegetationAreaInHectares), 0);

  const totalCulture = {
    soja: ruralProducer.reduce((total, farmer) => total + (farmer.plantedCrops.some((culture) => culture === "Soja") ? 1 : 0), 0),
    milho: ruralProducer.reduce((total, farmer) => total + (farmer.plantedCrops.some((culture) => culture === "Milho") ? 1 : 0), 0),
    algodao: ruralProducer.reduce((total, farmer) => total + (farmer.plantedCrops.some((culture) => culture === "Algodao") ? 1 : 0), 0),
    cafe: ruralProducer.reduce((total, farmer) => total + (farmer.plantedCrops.some((culture) => culture === "Cafe") ? 1 : 0), 0),
    canadeacucar: ruralProducer.reduce((total, farmer) => total + (farmer.plantedCrops.some((culture) => culture === "Canadeacucar") ? 1 : 0), 0),
  };

  const states = {
    AC: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Acre' ? 1 : 0), 0),
    AL: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Alagoas' ? 1 : 0), 0),
    AP: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Amapá' ? 1 : 0), 0),
    AM: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Amazonas' ? 1 : 0), 0),
    BA: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Bahia' ? 1 : 0), 0),
    CE: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Ceará' ? 1 : 0), 0),
    DF: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Distrito Federal' ? 1 : 0), 0),
    ES: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Espírito Santo' ? 1 : 0), 0),
    GO: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Goiás' ? 1 : 0), 0),
    MA: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Maranhão' ? 1 : 0), 0),
    MT: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Mato Grosso' ? 1 : 0), 0),
    MS: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Mato Grosso do Sul' ? 1 : 0), 0),
    MG: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Minas Gerais' ? 1 : 0), 0),
    PA: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Pará' ? 1 : 0), 0),
    PB: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Paraíba' ? 1 : 0), 0),
    PR: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Paraná' ? 1 : 0), 0),
    PE: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Pernambuco' ? 1 : 0), 0),
    PI: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Piauí' ? 1 : 0), 0),
    RJ: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Rio de Janeiro' ? 1 : 0), 0),
    RN: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Rio Grande do Norte' ? 1 : 0), 0),
    RS: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Rio Grande do Sul' ? 1 : 0), 0),
    RO: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Rondônia' ? 1 : 0), 0),
    RR: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Roraima' ? 1 : 0), 0),
    SC: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Santa Catarina' ? 1 : 0), 0),
    SP: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'São Paulo' ? 1 : 0), 0),
    SE: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Sergipe' ? 1 : 0), 0),
    TO: ruralProducer.reduce((total, farmer) => total + (farmer.state === 'Tocantins' ? 1 : 0), 0),
  };


  const dataArea = [
    ["area", "quantity"],
    ["Área agricultável ", totalArableArea],
    ["vegetação", totalVegetationArea],
  ];

  const dataCulture = [
    ["culture", "quantity"],
    ["Soja ", totalCulture.soja],
    ["Milho", totalCulture.milho],
    ["Algodão", totalCulture.algodao],
    ["Café", totalCulture.cafe],
    ["Cana de Açucar", totalCulture.canadeacucar],
  ];

  const dataState = [
    ["state", "quantity"],
    ["AC", states.AC],
    ["AL", states.AL],
    ["AP", states.AP],
    ["AM", states.AM],
    ["BA", states.BA],
    ["CE", states.CE],
    ["DF", states.DF],
    ["ES", states.ES],
    ["GO", states.GO],
    ["MA", states.MA],
    ["MT", states.MT],
    ["MS", states.MS],
    ["MG", states.MG],
    ["PA", states.PA],
    ["PB", states.PB],
    ["PR", states.PR],
    ["PE", states.PE],
    ["PI", states.PI],
    ["RJ", states.RJ],
    ["RN", states.RN],
    ["RS", states.RS],
    ["RO", states.RO],
    ["RR", states.RR],
    ["SC", states.SC],
    ["SP", states.SP],
    ["SE", states.SE],
    ["TO", states.TO],
  ];

  return (
    <PrincipalLayout>
      <S.ContainerData>
        <S.ContentData>
          <h2>Total de Fazendas</h2>
          <p>{totalFarms}</p>
        </S.ContentData>

        <S.ContentData>
          <h2>Total de fazendas em hectares</h2>
          <p>{totalFarmArea}ha</p>
        </S.ContentData>
      </S.ContainerData>

      <S.ContainerCharts>
        <Charts
          width="100%"
          height="400px"
          options={{
            title: "Uso de solo"
          }}
          data={dataArea}
        />
        <Charts
          width="100%"
          height="400px"
          options={{
            title: "Tipo de cultura"
          }}
          data={dataCulture}
        />
        <Charts
          width="100%"
          height="400px"
          options={{
            title: "Produtores por estado"
          }}
          data={dataState}
        />
      </S.ContainerCharts>

    </PrincipalLayout>

  )
}