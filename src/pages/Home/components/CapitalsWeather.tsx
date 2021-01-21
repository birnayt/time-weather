import React from 'react';

import { Capitals, ListTables } from '../styles/main';

const CapitalsWeather: React.FC = () => {
  return (
    <Capitals>
      <h3>Capitais</h3>
      <ListTables>
        <table>
          <tr className="capitals-row">
            <th className="capitals-head">Min</th>
            <th className="capitals-head">Max</th>
            <th aria-label="Local" className="capitals-head" />
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>Rio de Janeiro</td>
          </tr>
          <tr className="capitals-row">
            <td>14°</td>
            <td>22°</td>
            <td>São Paulo</td>
          </tr>
          <tr className="capitals-row">
            <td>21°</td>
            <td>32°</td>
            <td>Belo Horizonte</td>
          </tr>
          <tr className="capitals-row">
            <td>24°</td>
            <td>37°</td>
            <td>Brasília</td>
          </tr>
          <tr className="capitals-row">
            <td>24°</td>
            <td>37°</td>
            <td>Belém</td>
          </tr>
        </table>
        <table>
          <tr className="capitals-row">
            <th className="capitals-head">Min</th>
            <th className="capitals-head">Max</th>
            <th aria-label="Local" className="capitals-head" />
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>Rio de Janeiro</td>
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>São Paulo</td>
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>Belo Horizonte</td>
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>Brasília</td>
          </tr>
          <tr className="capitals-row">
            <td>18°</td>
            <td>27°</td>
            <td>Belém</td>
          </tr>
        </table>
      </ListTables>
    </Capitals>
  );
};

export default CapitalsWeather;
