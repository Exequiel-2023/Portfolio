import Home from './pages/Home'

function App(props) {
  console.log(props)
  
  const portfolio = {
      titulo : " Mi Portfolio Personal",
      nombre: "Exequiel Nuñez",
      apellido: "Nuñez",
      direccion: "Amador Lucero 70",
      edad: 33,
      estadoCivil: "Casado",
      hobby: "Futbol",
  }

  const {titulo,nombre,apellido,direccion,edad,estadoCivil,hobby} = portfolio

  return (
    <>
      <Home portfolio={portfolio} titulo={titulo} nombre={nombre} apellido={apellido} direccion={direccion} edad={edad} estadoCivil={estadoCivil} hobby={hobby}/>
    </>
  )
}

export default App
