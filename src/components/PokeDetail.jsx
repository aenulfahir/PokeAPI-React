import React from "react"

const PokeDetail = ({ pokemonDetail }) => {
  return (
    <div style={detailStyles.container}>
      <div style={detailStyles.pokemonImage}>
        <img
          src={pokemonDetail.sprites.front_default}
          height={200}
          alt={pokemonDetail.name}
        />
        <p style={detailStyles.pokemonName}>{pokemonDetail.name}</p>
      </div>
      <div style={detailStyles.pokemonAttribute}>
        <p style={detailStyles.label}>Types :</p>
        <p>
          {pokemonDetail.types.map((item) => item.type.name).join(", ")}
        </p>
        <p style={detailStyles.label}>Skills : </p>
        <p>
          {pokemonDetail.abilities.map((item) => item.ability.name).join(", ")}
        </p>
        <p style={detailStyles.label}>Status :</p>
        <table style={detailStyles.statusTable}>
          <thead>
            <tr>
              <th style={detailStyles.tableContent}>Status</th>
              <th style={detailStyles.tableContent}>Value</th>
            </tr>
          </thead>
          <tbody>
            {pokemonDetail.stats.map((item) => (
              <tr key={item.stat.name}>
                <td style={detailStyles.tableContent}>{item.stat.name}</td>
                <td style={detailStyles.tableContent}>{item.base_stat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const detailStyles = {
  container: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center",
    gap: 32,
  },
  pokemonImage: {
    backgroundColor: "aquamarine",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  pokemonName: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    margin: 6,
    padding: 6,
    fontSize: 20,
    fontWeight: 600,
  },
  pokemonAttribute: {
    display: "grid",
    textAlign: "left",
    gridTemplateColumns: "100px auto",
    gap: 16,
  },
  label: {
    fontSize: "18px",
    fontWeight: "600",
  },
  statusTable: {
    borderCollapse: "collapse",
  },
  tableContent: {
    maxWidth: 300,
    border: "1px solid grey",
    borderCollapse: "collapse",
    padding: "2px 4px",
    textAlign: "center",
  },
}

export default PokeDetail
