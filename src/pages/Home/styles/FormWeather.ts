import styled from 'styled-components';

export const FormWeather = styled.form`
  margin-top: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    outline: none;
    border: none;

    height: 50px;
    padding: 0 20px;
    min-width: 450px;

    font-size: 20px;
  }

  .btn-search {
    background: none;
    border: none;
    position: absolute;
    right: 15px;

    color: #6a6a6a;
  }
`;
