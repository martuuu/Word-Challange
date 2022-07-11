import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledTable = styled.section`
  table {
    margin-top: 20px;
    background-color: #3ba6ed;
    border: solid lightblue 1px;
    border-radius: 20px;
    padding: 20px 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
  
  tr {
    margin-bottom: 10px;
  }
  .prueba {
    width: 230px;
    display: inline-block;
  }

  .rounds-per-game {
    margin-right: 20px;
    display: inline-block;
  }

  input {
    border: solid white;
    border-radius: 4px;
  }

  button {
    margin-right: 10px;
    width: 35px;
    height: 35px;
    background-color: #3ba6ed;
    color: white;
    border: solid white 1px;
    border-radius: 3px;
  }
`;

const Table = () => {
  const data = useSelector((state) => state.results);
  const [roundsToPlay, setRoundsToPlay] = useState([1]);

  const handleClick = (e) => {
    if (e.target.value === "add") {
      let add = roundsToPlay.length + 1;
      setRoundsToPlay([...roundsToPlay, add]);
    } else {
      roundsToPlay.pop();
      setRoundsToPlay([...roundsToPlay]);
    }
  };

  const rowsForPlayers = data.map(() => {
    return (
      <>
        <td>
          <input></input>
        </td>
        <td>
          <input></input>
        </td>
      </>
    );
  });

  console.log(data);

  return (
    <StyledTable>
      <div className="rounds-per-game">
        <p className="rounds-per-game">Rondas a jugar: {roundsToPlay.length}</p>
        <button type="button" value="add" onClick={(e) => handleClick(e)}>
          +
        </button>
        <button type="button" value="delete" onClick={(e) => handleClick(e)}>
          -
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Ronda</th>
            {data.map((player) => {
              return (
                <>
                  <th colSpan="2">{player.name}</th>
                </>
              );
            })}
          </tr>
          <tr>
            <th></th>
            {data.map(() => {
              return (
                <>
                  <th>Apuesta</th>
                  <th>Resultado</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {roundsToPlay.map((e) => {
            return (
              <>
                <tr>
                  <td>{e}</td>
                  {rowsForPlayers}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </StyledTable>
  );
};

export default Table;
