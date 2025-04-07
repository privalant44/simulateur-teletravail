import { useState } from 'react';

export default function App() {
  const [data, setData] = useState([
    { nom: 'Alice', jours: 120 },
    { nom: 'Bob', jours: 90 },
    { nom: 'Chloé', jours: 60 }
  ]);

  const consoJour = 1;

  const updateJours = (index, value) => {
    const updated = [...data];
    updated[index].jours = parseInt(value) || 0;
    setData(updated);
  };

  const totalConso = data.reduce((sum, item) => sum + item.jours * consoJour, 0);

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>Simulateur Télétravail - Anima Néo</h1>
      <table border="1" cellPadding="5" style={{ width: '100%', marginBottom: 20 }}>
        <thead>
          <tr>
            <th>Collaborateur</th>
            <th>Jours télétravail / an</th>
            <th>Consommation (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((collab, index) => (
            <tr key={index}>
              <td>{collab.nom}</td>
              <td>
                <input
                  type="number"
                  value={collab.jours}
                  onChange={(e) => updateJours(index, e.target.value)}
                />
              </td>
              <td>{(collab.jours * consoJour).toFixed(1)} kWh</td>
            </tr>
          ))}
        </tbody>
      </table>
      <strong>Consommation totale : {totalConso.toFixed(1)} kWh</strong>
    </div>
  );
}