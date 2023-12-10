
const Button = ({ text }) => {
    return (
        <button className='font-bold border-2 px-4 py-4 rounded-r-xl rounded-l-xl btn btn-outline btn-success text-black hover:text-white '>{text}</button>
    );
};

export default Button;