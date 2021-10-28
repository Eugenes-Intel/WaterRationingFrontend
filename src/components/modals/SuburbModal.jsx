import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CrudButton } from '../../global/CrudButton';
import { GlobalDropdown } from '../../global/GlobalDropdown';
import { post, get } from '../../modules/apis/api';
import { axiosCitiesConfig, axiosSuburbsConfig } from '../../modules/configs/axiosConfigs';

const Container = styled.div`
  /* background-color: var(--primary); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* height: 100%; */
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  /* border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius); */
`;

const InputSectionContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 40px;
`;

const InputCategoryContainer = styled.div`
  /* box-shadow: 0 0 1px var(--white); */
  border-radius: var(--border-radius);
  padding: 10px 20px;
  margin: 20px auto;
  background-color: var(--primary);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  padding: 10px 25px;
  margin: 20px auto;
  color: var(--font-color-light);
  display: block;
  border-style: none;
  border-radius: var(--border-radius);
  background-color: var(--background-color);
  transition-duration: 0.8s;

  &::placeholder {
    color: var(--secondary-dark);
    opacity: 0.7;
  }
`;

const CrudButtonsContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const data = {
  cityId: 0,
  name: '',
  density: 0,
  population: 0.0,
  allocation: 0.0,
};

export function SuburbModal(props) {
  const [newSuburb, setNewSuburb] = useState({ axiosConfig: axiosSuburbsConfig, data });
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchCities() {
      const scopeConfig = { axiosConfig: axiosCitiesConfig };
      const response = await get(scopeConfig)
        .then((res) => res)
        .catch((err) => alert.log(err));
      response && setCities(response.data);
    }
    fetchCities();
  }, []);

  const onSave = (e) => {
    const Save = async () => {
      const response = await post(newSuburb)
        .then((res) => res)
        .catch((err) => alert(err));
      response && alert(response.data);
    };
    Save();
    onCancel('done');
  };

  const onCancel = (e) => {
    setNewSuburb({ axiosConfig: axiosSuburbsConfig, data });
    props.setShowModal();
  };

  return (
    <Container>
      <InputSectionContainer>
        <InputCategoryContainer>
          <GlobalDropdown
            placeholder='city'
            entities={cities}
            // onChange={(e) => setNewSuburb((s) => (s.data.city.name = e.target.value))}
            onChange={(e) =>
              setNewSuburb({
                ...newSuburb,
                data: {
                  ...newSuburb.data,
                  data: { ...newSuburb.data, cityId: parseInt(e.target.value) },
                },
              })
            }
          />
        </InputCategoryContainer>
        <InputCategoryContainer>
          <TextInput
            placeholder='Suburb'
            // onChange={(e) => setNewSuburb((s) => (s.data.suburb = e.target.value))}
            onChange={(e) =>
              setNewSuburb({ ...newSuburb, data: { ...newSuburb.data, name: e.target.value } })
            }
          />
        </InputCategoryContainer>
        <CrudButtonsContainer>
          <CrudButton
            title='Save'
            bgColor='var(--deco-pink)'
            iconBrand='fas'
            iconName='save'
            onClick={(e) => onSave(e)}
          />
          <CrudButton
            title='Cancel'
            bgColor='var(--secondary-light)'
            iconBrand='fas'
            iconName='window-close'
            onClick={(e) => onCancel(e)}
          />
        </CrudButtonsContainer>
      </InputSectionContainer>
      <InputSectionContainer>
        <InputCategoryContainer>
          <TextInput
            placeholder='Density'
            onChange={(e) =>
              setNewSuburb({ ...newSuburb, data: { ...newSuburb.data, density: e.target.value } })
            }
          />
        </InputCategoryContainer>
        <InputCategoryContainer>
          <TextInput
            placeholder='Popullation'
            onChange={(e) =>
              setNewSuburb({
                ...newSuburb,
                data: { ...newSuburb.data, population: e.target.value },
              })
            }
          />
          <TextInput
            placeholder='Allocation'
            onChange={(e) =>
              setNewSuburb({
                ...newSuburb,
                data: { ...newSuburb.data, allocation: e.target.value },
              })
            }
          />
        </InputCategoryContainer>
      </InputSectionContainer>
    </Container>
  );
}
