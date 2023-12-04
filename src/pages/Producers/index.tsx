import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal, { Styles } from 'react-modal';
import { useGlobalContext } from "../../context/GlobalContext";
import { PrincipalLayout } from "../../layout/principal";
import * as S from "./styles";

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

Modal.setAppElement('#root');
export const Producers = () => {
  const { ruralProducer, setRuralProducer } = useGlobalContext();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingFarm, setEditingFarm] = useState(null);

  console.log(ruralProducer)

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      id: 0,
      documentType: "",
      document: "",
      name: "",
      farmName: "",
      city: "",
      state: "",
      areaInHectares: "",
      arableAreaInHectares: "",
      vegetationAreaInHectares: "",
      plantedCrops: []
    }
  });


  const customStyles: Styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal(editMode = false) {
    setEditMode(editMode);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = (data: Farmer) => {
    const newData = [...ruralProducer];

  if (!editMode) {
    
    const newFarmer: Farmer = {
      ...data,
      id: newData.length + 1,
    };
    newData.push(newFarmer);
  } else {
    // Editar produtor existente
    const index = newData.findIndex((farm) => farm.id === editingFarm.id);
    newData[index] = { ...data, id: editingFarm.id };
    setEditMode(false);
    setEditingFarm(null);
  }
  setRuralProducer(newData);
  setIsOpen(false);
  }

  const estadosBrasileiros = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  const handleDelete = (id: any) => {
    const updatedProducers = ruralProducer.filter((farm) => farm.id !== id);
    setRuralProducer(updatedProducers);
  };

  const handleEdit = (farm) => {
    setEditMode(true);

    setEditingFarm(farm);

    setValue("id", farm.id);
    setValue("documentType", farm.documentType);
    setValue("document", farm.document);
    setValue("name", farm.name);
    setValue("farmName", farm.farmName);
    setValue("city", farm.city);
    setValue("state", farm.state);
    setValue("areaInHectares", farm.areaInHectares);
    setValue("arableAreaInHectares", farm.arableAreaInHectares);
    setValue("vegetationAreaInHectares", farm.vegetationAreaInHectares);
    setValue("plantedCrops", farm.plantedCrops);
    
    openModal(true);
  };

  return (
    <PrincipalLayout>
      <S.ManagerArea>
        <S.Button onClick={openModal}>Cadastrar Produtor</S.Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Cadastrar Produtor"
        >
          <S.ModalContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <S.GroupContent>
                <S.Select {...register("documentType")}>
                  <option value="">Tipo de documento</option>
                  <option value="cpf">CPF</option>
                  <option value="cnpj">CNPJ</option>
                </S.Select>

                {watch("documentType") === "cpf" && (
                  <S.InputM mask="999.999.999-99" placeholder="Número do CPF" {...register("document")} />
                )}
                {watch("documentType") === "" && (
                  <S.Input disabled />
                )}

                {watch("documentType") === "cnpj" && (
                  <S.InputM mask="99.999.999/9999-99" placeholder="Número do CNPJ" {...register("document")} />
                )}
              </S.GroupContent>

              <S.GroupContent>
                <S.Input placeholder="Nome" {...register('name')} />
                <S.Input placeholder="Nome da Fazenda" {...register('farmName')} />
              </S.GroupContent>

              <S.GroupContent>
                <S.Select {...register("state")}>
                  <option value="">Selecione o Estado</option>
                  {estadosBrasileiros.map((estado) => (
                    <option key={estado.value} value={estado.label}>
                      {estado.label}
                    </option>
                  ))}
                </S.Select>

                <S.Input placeholder="Cidade" {...register('city')} />

              </S.GroupContent>

              <S.GroupContent>
                <S.Input placeholder="Área em hectares" {...register('areaInHectares')} />
                <S.Input placeholder="Área agricultável em hectares" {...register('arableAreaInHectares')} />
              </S.GroupContent>

              <S.GroupContent>
                <S.Input placeholder="Área de vegetação em hectares" {...register('vegetationAreaInHectares')} />
              </S.GroupContent>

              <S.GroupContent>
                <S.Select {...register("plantedCrops", { required: true })} multiple>
                  <option value="Soja">Soja</option>
                  <option value="Milho">Milho</option>
                  <option value="Algodao">Algodão</option>
                  <option value="Cafe">Café</option>
                  <option value="Canadeacucar">Cana de Açúcar</option>

                </S.Select>
              </S.GroupContent>

              <S.Submit type="submit" />

            </form>

          </S.ModalContent>
        </Modal>
      </S.ManagerArea>

      <S.DisplayArea>
        {ruralProducer.map((farm) => {
          return (
            <>
              <p>{farm.farmName} <button onClick={() => handleEdit(farm)}>Editar</button> <button onClick={() => handleDelete(farm.id)}>Excluir</button></p>


            </>
          )
        })}

      </S.DisplayArea>
    </PrincipalLayout>
  )
}