import styled from 'styled-components';

export const Body = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const Capitals = styled.div`
  margin: 15px 0;
  width: 100%;
  max-width: 400px;
  text-align: left;

  h3 {
    font-size: 40px;
    color: #fff;
    margin: 5px 0 12px;
  }
`;

export const ListTables = styled.div`
  display: flex;
  gap: 15px;
  font-weight: bold;
  font-size: 18px;
  color: #373120;

  table {
    width: max-content;
    border-spacing: 10px;

    th:first-child,
    td:first-child {
      padding-right: 5px;
    }

    th:last-child,
    td:last-child {
      padding-left: 15px;
    }

    .capitals-head {
      color: #fff;
      font-weight: 300;
      font-size: 17px;
    }
  }
`;
