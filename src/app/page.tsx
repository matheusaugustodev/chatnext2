'use client';
import React, { useState, useEffect } from 'react'
import Login from './login/page';


const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:3001/");
    const data = await response.json();
    // Agora, 'data' contém os dados da resposta da requisição
    console.log(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}



export default function Home() {
  // const socket = io('http://localhost:3001')
  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001')
    
  })

  const [logged, setLogged] = useState(1)

  return (
    <>
      <div className='p-4'>
        {logged ? <Login /> : ''}
      </div>
    </>
  )
}
