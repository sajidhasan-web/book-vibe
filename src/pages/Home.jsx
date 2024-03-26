import Hero from '../components/Hero';
import Books from '../components/Books';
import { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const data = useLoaderData()
   
   
    return (
         <div className="container mx-auto px-5 md:8 lg:10">
            <Hero></Hero>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;