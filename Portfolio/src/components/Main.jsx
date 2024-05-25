import ListGroup from "react-bootstrap/ListGroup";

import "../css/Main.css";

const Main = (props) => {
  console.log(props)
  // const DatosPersonales = {
    
  //   Direccion: "Amador Lucero 70",
  //   Edad: 33,
  //   EstadoCivil: "Casado",
  //   Hobby: "Futbol",
  // };

  // const { Direccion, Edad, EstadoCivil, Hobby } = DatosPersonales;

  return (
    <div className="lista">
      <ListGroup className="grupo">
      <ListGroup.Item >Apellido: {props.portfolio.apellido}</ListGroup.Item>
      <ListGroup.Item >Nombre: {props.portfolio.nombre}</ListGroup.Item>
        <ListGroup.Item >Edad: {props.portfolio.edad}</ListGroup.Item>
        <ListGroup.Item>Direccion: {props.portfolio.direccion}</ListGroup.Item>
        <ListGroup.Item>Estado Civil: {props.portfolio.estadoCivil}</ListGroup.Item>
        <ListGroup.Item>Hobby: {props.portfolio.hobby}</ListGroup.Item>
      </ListGroup>
      <br />
      <h3 className="h3">Estudie Lenguajes como:</h3>
      <br />
      <br />
      <div className="card-group">
        <div className="card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">HTML</h5>
            <p className="card-text">
              HTML es la sigla del inglés HyperText Markup Language (lenguaje de
              marcado de hipertexto) y refiere al lenguaje de marcado para la
              elaboración de páginas web.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://picodotdev.github.io/blog-bitix/assets/images/logotypes/css.svg"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">CSS</h5>
            <p className="card-text">
              El CSS podría definirse como un tipo de lenguaje que permite
              definir y crear la presentación visual de un documento ya
              estructurado y escrito en un lenguaje de marcado como puede ser
              HTML.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://media.licdn.com/dms/image/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=rtD52hfy37nFVmc4_MXfnflV6C-ke773W70SYJLoWRc"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">Javascript</h5>
            <p className="card-text">
              JavaScript es un lenguaje de programación que los desarrolladores
              utilizan para hacer páginas web interactivas
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="card-group">
        <div className="card">
          <img
            src="https://aspnetcoremaster.com/img/csharp.webp"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">C#</h5>
            <p className="card-text">
            C# se puede utilizar para desarrollar una amplia variedad de aplicaciones de software, que van desde aplicaciones web a aplicaciones de escritorio, aplicaciones móviles, juegos, servicios web y mucho más.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://blog.desafiolatam.com/wp-content/uploads/2018/05/sql-logo.png"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">SQL</h5>
            <p className="card-text">
            SQL es un lenguaje de computación para trabajar con conjuntos de datos y las relaciones entre ellos.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://javguerra.github.io/assets/img/mysql.png"
            className="imagen"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">MySql</h5>
            <p className="card-text">
            MySQL es un sistema de gestión de bases de datos (DBMS, por sus siglas en inglés) de código abierto desarrollado por Oracle. Se ha ganado su lugar en el mundo digital como una base de datos relacional que permite almacenar, organizar y recuperar datos de manera eficiente.
            </p>
          </div>
        </div>
      </div>
      </div>
        
  
  
  );
};

export default Main;


