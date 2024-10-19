import { Children } from "react";

const Button = () => {
    return (
        <button
            className={'h-12 rounded-md text-sm ${variant}'}
            type={type}
        >
            {Children}
        </button>
    );
};

export default Button;