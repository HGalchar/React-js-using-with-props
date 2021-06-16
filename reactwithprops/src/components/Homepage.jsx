import Footer from "./Footer"
import HomeBody from "./HomeBody";

import Navbar from "./Navbar"

const data = {name: "Ford", model: "Mustang"};
const Homepage = () =>{
    return(
        <>
            <Navbar/>
            <HomeBody brand={data}/>
            <Footer/>
        </>
    );
}

export default Homepage;