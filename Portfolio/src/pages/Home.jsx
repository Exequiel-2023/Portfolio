
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'


const Home = (props) => {
// console.log(props)
    return (
        <div>        
        <Header portfolio ={props.portfolio}/>        
        <Main portfolio ={props.portfolio}/>        
        <Footer/>        
        </div>
    )
}

export default Home