"use client"
import styled from 'styled-components';
import { useFilter } from '../hooks/useFilter';
import { FilterType } from '../types/filter-types';

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  list-style: none;
`;

const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  font-weight: ${props => (props.selected ? '600' : '400')};
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-dark);
  border-bottom: ${props => (props.selected ? '4px solid var(--orange-low)' : '')};
  cursor: pointer;
  
`;

export function FilterByType() {
    const {type, setType} = useFilter();

    const handleChangeType = (value: FilterType) =>{
        setType(value)
    }
  return (
    <FilterList>
      <FilterItem selected = {type === FilterType.ALL} onClick={() => handleChangeType(FilterType.ALL)}>
        Todos os Produtos
        </FilterItem>
      <FilterItem selected={type === FilterType.SHIRT} onClick={() => handleChangeType(FilterType.SHIRT)}>
        Camisas
        </FilterItem>
      <FilterItem selected={type === FilterType.PANTS} onClick={() => handleChangeType(FilterType.MUG)}>
        Calças
        </FilterItem>
      <FilterItem selected={type === FilterType.DRESSES} onClick={() => handleChangeType(FilterType.DRESSES)}>
        Vestidos
        </FilterItem>
    </FilterList>
  );
}
