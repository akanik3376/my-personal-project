import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../Shared/Button";

const Skills = () => {
    return (
        <div className="mb-28">
            <Container>
                <h3 className='text-red-500 text-2xl  font-semibold text-center mt-28 mx-auto border-b-2 border-red-500 w-32'>My Skill</h3>
                <Link><Button text='anik'></Button></Link>
            </Container>
        </div>
    );
};

export default Skills;