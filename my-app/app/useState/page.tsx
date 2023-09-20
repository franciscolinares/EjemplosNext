'use client'
import React, { useState } from 'react';

export default function Click() {
  // Declaración de una variable de estado que llamaremos "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has hecho click  {count} veces en el boton</p>
      <button onClick={() => setCount(count + 1)}>
        Click 
      </button>
    </div>
  )
}