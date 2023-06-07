import {Link, } from "react-router-dom";
// import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className={'section'}>
            <h2>Home</h2>
            <Link to={'/about'} className={'btn'}>About</Link>
        </section>
    )
};
export default Home;
