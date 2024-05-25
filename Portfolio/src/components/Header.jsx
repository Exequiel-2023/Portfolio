import exequiel from "../assets/exequiel.jpg";
import "../css/Header.css"

const Header = (props) => {
  console.log(props)
  
  return (
    <div className="header">
      <div className="logo">
      <img src={exequiel} alt="" />
      <h1 className="a">{props.portfolio.titulo}</h1>
      </div>
    </div>
  )
}

export default Header