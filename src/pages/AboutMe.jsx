import Container from "../components/Container";
import anik from '../assets/img/young-bearded-man-with-striped-shirt_273609-5677.avif'
import Skills from "../components/Skills";
const AboutMe = () => {
    return (
        <div >
            <Container>
                <h1 className="text-5xl mb-12 mt-2">About Me</h1>
                <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1">
                        <img src={anik} alt="" />
                    </div>
                    <div className=" md:col-span-2 mt-5 md:mt-0 ml-5">
                        <h1 className="text-5xl font-bold">I'm Anik Ghosh</h1>
                        <h6 className="text-3xl my-4 font-semibold">A Lead <span className="text-red-500">Front-End Developer</span> based in
                            <span className="text-red-500"> React</span>
                        </h6>
                        <p className="text-xl">Worked as a Front-End Developer with around 1 years of experience. Extensively worked developing Responsive Web Applications. Experience in developing web pages effectively using HTML5 and CSS3 in making web pages cross-browser compatible. Experience in JavaScript, React JS. Typescript. Check out my Portfolio</p>
                        <p className="border col-span-2 my-4"></p>

                        <h3 className="text-2xl font-semibold">PERSONAL INFO</h3>

                        <div className=" text-xl font-semibold flex flex-col md:flex-row justify-between mt-3">
                            <div className="mt-2 md:mt-0">
                                <p>Name: Anik Ghosh</p>
                                <p>Age : 23 Years</p>
                                <p>Nationality : Khulna, Bangladesh</p>
                            </div>
                            <div className="mt-5 md:mt-0">
                                <p>Address : Khulna, Dighalia</p>
                                <p>Phone : +8801910697853</p>
                                <p>Email : mraju5797@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills></Skills>
            </Container>
        </div>
    );
};

export default AboutMe;