import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../Shared/Button";
import SkillCircel from "./SkillCircel";
const Skills = () => {
    const percent = 20

    return (
        <div className="mb-12">
            <Container>
                <h3 className='text-red-500 text-2xl  font-semibold text-center mt-28 mx-auto border-b-2 border-red-500 w-32'>My Skill</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={90}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">HTML</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={85}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">CSS</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={75}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">JavaScript</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={85}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">React</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={85}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Firebase</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={80}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">MongoDb</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={75}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Express JS</h4>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="flex flex-col items-center">
                            <SkillCircel percent={65}></SkillCircel>
                            <h4 className="text-xl font-semibold mt-3 text-[#2db7f5]">Node JS</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;