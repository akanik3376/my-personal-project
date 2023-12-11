import React from 'react';
import anik from '../assets/img/young-bearded-man-with-striped-shirt_273609-5677.avif'
import Container from '../components/Container';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Download from '../components/Download';
const Home = () => {
    return (
        <div>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className=" w-full md:w-[47%]">

                        <img className='object-cover rounded-t-full rounded-b-full  border-4' src={anik} alt="" />
                    </div>
                    <div className='w-full md:w-[47%] mt-5 md:mt-0'>
                        <h2 className="text-5xl font-bold mb-4 text-center md:text-start">Anik Ghosh</h2>
                        <img src="https://camo.githubusercontent.com/ecf7719dd7bf5bee8642d1bf042654905ab7aef1dedd32644e6f58a3ef38588d/68747470733a2f2f726561646d652d747970696e672d7376672e6865726f6b756170702e636f6d3f63656e7465723d747275652677696474683d333830266c696e65733d46726f6e742d456e642b5765622b446576656c6f7065723b4d45524e2b537461636b2b446576656c6f7065723b312532422b79656172732b6f662b636f64696e672b657870657269656e63653b416c776179732b6c6561726e696e672b6e65772b7468696e6773" alt="" />
                        <p className='my-4'>Junior Web Developer with one years of experience is seeking an opportunity to extend my web development and multimedia editing skills and knowledge

                        </p>

                        <Download></Download>
                    </div>
                </div>
                <h3 className='text-red-500 text-xl border-b-2 border-red-500 font-semibold w-24 mt-28'>About me</h3>
            </Container>
            <div>
                <AboutMe></AboutMe>
            </div>

            <div >
                <Portfolio></Portfolio>
            </div>
            <div className='mt-16'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;
