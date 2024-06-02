import React from "react"

const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
  return (
    <div style={listStyles.gridContent}>
      {pokemonList.map((item) => (
        <div
          key={item.name}
          style={listStyles.card}
          onClick={() => setSelectedPokemonName(item.name)}
        >
          {item.name}
        </div>
      ))}
    </div>
  )
}

const listStyles = {
  gridContent: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 16,
  },
  card: {
    padding: "16px 8px",
    backgroundColor: "aquamarine",
    borderRadius: "8px",
    cursor: "pointer",
  },
}

export default PokeList
