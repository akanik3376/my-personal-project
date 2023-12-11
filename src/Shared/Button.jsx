
const Button = ({ text }) => {
    return (
        <button className=' border-2 rounded-r-xl rounded-l-xl btn btn-outline btn-success  hover:text-white px-4 py-2  text-white rounded-md hover:bg-blue-600 flex justify-center items-center font-bold gap-x-2 '>{text}</button>
    );
};

export default Button;