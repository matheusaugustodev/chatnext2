import Login from './login/page';
import Homepage from './pages/Homepage';

// const fetchData = async () => {
//   try {
//     const response = await fetch("http://localhost:3001/");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error('Erro ao buscar dados:', error);
//   }
// }

export default function Home() {
  const createUser = async () => {
  
    const response = await fetch("https://chatnext.azurewebsites.net/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(user)
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem('data', data)
  
  };
  // const socket = io('http://localhost:3001')
    const socket = new WebSocket('wss://chatnext.azurewebsites.net')

  const logged = 0
  return (
    <>
      <div className='p-4'>
        {logged ? <Homepage /> : <Login />}
      </div>
    </>
  )
}
