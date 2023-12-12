import Container from "../components/Container";
import jobtex from '../assets/img/jobtex.png'
import autovent from '../assets/img/autovent.png'
import survey from '../assets/img/survey.png'
import Button from "../Shared/Button";

const Portfolio = () => {
    return (
        <div className="">
            <Container>
                <h3 className='text-red-500 text-2xl  font-semibold text-center  mx-auto border-b-2 border-red-500 w-40'>My Portfolio</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Job Text */}
                    <div data-aos="zoom-in" className="mt-8">
                        <figure><img className="w-full h-[50vh]" src={jobtex} alt="Shoes" /></figure>
                        <div className="flex mt-4 gap-2">
                            <a href="https://jobtex-projecs.web.app/">
                                <Button text='Visit Now'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/assignment11-client-side-fullStack">
                                <Button text='Github Client'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/assignment11-surver-side-fullStack">
                                <Button text='Github Server'></Button>
                            </a>
                        </div>
                    </div>


                    {/* autovent */}
                    <div data-aos="zoom-in" className="mt-8">
                        <figure><img className="w-full h-[50vh]" src={autovent} alt="Shoes" /></figure>
                        <div className="flex mt-4 gap-2">
                            <a href="https://auto-vent-projects.web.app/">
                                <Button text='Visit Now'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/brandshop-client-side-fullStack">
                                <Button text='Github Client'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/brandshop-server-side-fullStack/commit/23bb">
                                <Button text='Github Server'></Button>
                            </a>
                        </div>
                    </div>


                    {/* survey */}
                    <div data-aos="zoom-in" className="mt-8">
                        <figure><img className="w-full h-[50vh]" src={survey} alt="Shoes" /></figure>
                        <div className="flex mt-4 gap-2">
                            <a href="https://project-12-9f3fd.web.app/">
                                <Button text='Visit Now'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/assignment2-client-side-survey-pool">
                                <Button text='Github Client'></Button>
                            </a>
                            <a href="https://github.com/akanik3376/assignment2-server-side-survey-pool">
                                <Button text='Github Server'></Button>
                            </a>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Portfolio;