import { useState } from "react";

import axios from "axios";

import "./AddMemory.css";

const AddMemory = () => {
  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form>
        <label>
          <p>Título:</p>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Defina um título"
          />
        </label>
        <label>
          <p>Descrição:</p>
          <textarea
            name="description"
            id="description"
            placeholder="Explique o que aconteceu"
          ></textarea>
        </label>
        <label>
          <p>Foto:</p>
          <input type="file" name="image" id="image" />
        </label>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default AddMemory;
