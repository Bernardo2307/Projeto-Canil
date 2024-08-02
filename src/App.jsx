import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [smallDogs, setSmallDogs] = useState(0);
  const [largeDogs, setLargeDogs] = useState(0);
  const [date, setDate] = useState('');
  const [bestPetShop, setBestPetShop] = useState({ name: '', cost: 0 });

  const petshops = [
    {
      name: 'Meu Canino Feliz',
      distance: 2,
      prices: {
        weekday: { small: 20, large: 40 },
        weekend: { small: 24, large: 48 }
      }
    },
    {
      name: 'Vai Rex',
      distance: 1.7,
      prices: {
        weekday: { small: 15, large: 50 },
        weekend: { small: 20, large: 55 }
      }
    },
    {
      name: 'ChowChawgas',
      distance: 0.8,
      prices: {
        weekday: { small: 30, large: 45 },
        weekend: { small: 30, large: 45 }
      }
    }
  ];

  const getDayType = (date) => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();
    return (day === 5 || day === 6) ? 'weekend' : 'weekday';
  };

  const calculateCost = (petshop) => {
    const dayType = getDayType(date);
    const prices = petshop.prices[dayType];
    return smallDogs * prices.small + largeDogs * prices.large;
  };

  const findBestPetShop = () => {
    const costs = petshops.map(petshop => ({
      name: petshop.name,
      cost: calculateCost(petshop),
      distance: petshop.distance
    }));

    costs.sort((a, b) => {
      if (a.cost === b.cost) {
        return a.distance - b.distance;
      }
      return a.cost - b.cost;
    });

    setBestPetShop({ name: costs[0].name, cost: costs[0].cost });
  };

  return (
    <div>
      <h1>Melhor Petshop para Banho</h1>
      <label>
        Cães Pequenos:
        <input
          type="number"
          value={smallDogs}
          onChange={(e) => setSmallDogs(Number(e.target.value))}
        />
      </label>
      <label>
        Cães Grandes:
        <input
          type="number"
          value={largeDogs}
          onChange={(e) => setLargeDogs(Number(e.target.value))}
        />
      </label>
      <label>
        Data:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <button onClick={findBestPetShop}>Encontrar Melhor Petshop</button>
      {bestPetShop.name && (
        <h2>
          O melhor petshop é: {bestPetShop.name} com um custo total de R$ {bestPetShop.cost.toFixed(2)}
        </h2>
      )}
    </div>
  );
};

export default App;
