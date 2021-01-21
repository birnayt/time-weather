import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import { FormWeather } from '../styles/FormWeather';

const FormSearchWeather: React.FC = () => {
  return (
    <FormWeather>
      <input placeholder="Insira aqui o nome da cidade" />
      <button className="btn-search" type="submit">
        <AiOutlineSearch size={25} />
      </button>
    </FormWeather>
  );
};

export default FormSearchWeather;
