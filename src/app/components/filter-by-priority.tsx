import React, { useState } from 'react';
import styled from 'styled-components';
import { useFilter } from '../hooks/useFilter';
import { PriorityTypes } from '../types/priority-types';
import { ArrowIcon } from './arrow-icon';


interface FilterByPriorityProps {}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg{
    margin-left:10px;
  }
`;

const PriorityFilter = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  list-style: none;
  width: 240px;
  z-index: 999;
  top: 100%;
  
  li{
    color: var(--text-dark)
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    cursor: pointer;
}
li + li{
    margin-top:4px;
}
`;

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false);
  const{setPriority}= useFilter()
  const handleOpen = () => setIsOpen(prev => !prev)
  const handleUpdatePriority = (value : PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - Menor</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Menor - Maior</li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais Vendidos</li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
