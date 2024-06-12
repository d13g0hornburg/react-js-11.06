import React from 'react';
import './App.css';

const PokemonCard = ({ number, name, type1, type2, hp, attack, defense, speed, generation, legendary, image }) => {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h2>#{number} - {name}</h2>
      <p><strong>Type 1:</strong> {type1}</p>
      <p><strong>Type 2:</strong> {type2}</p>
      <p><strong>HP:</strong> {hp}</p>
      <p><strong>Attack:</strong> {attack}</p>
      <p><strong>Defense:</strong> {defense}</p>
      <p><strong>Speed:</strong> {speed}</p>
      <p><strong>Generation:</strong> {generation}</p>
      <p><strong>Legendary:</strong> {legendary ? "Yes" : "No"}</p>
    </div>
  );
}

function App(){
  return(
<div className="App">
      <div className="content">
        <PokemonCard 
          number={1}
          name="Bulbasaur"
          type1="Grass"
          type2="Poison"
          hp={45}
          attack={49}
          defense={49}
          speed={45}
          generation={1}
          legendary={false}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        />
        <PokemonCard 
          number={2}
          name="Ivysaur"
          type1="Grass"
          type2="Poison"
          hp={60}
          attack={62}
          defense={63}
          speed={60}
          generation={1}
          legendary={false}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
        />
        <PokemonCard 
          number={3}
          name="Venusaur"
          type1="Grass"
          type2="Poison"
          hp={80}
          attack={82}
          defense={83}
          speed={80}
          generation={1}
          legendary={false}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        />
        <PokemonCard 
          number={4}
          name="Charmander"
          type1="Fire"
          type2=""
          hp={39}
          attack={52}
          defense={43}
          speed={65}
          generation={1}
          legendary={false}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        />
        <PokemonCard 
          number={5}
          name="Charmeleon"
          type1="Fire"
          type2=""
          hp={58}
          attack={64}
          defense={58}
          speed={80}
          generation={1}
          legendary={false}
          image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
        />
      </div>
    </div>
  )
}

export default App;
