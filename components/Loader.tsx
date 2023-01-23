import { FC } from "react";

const Loader: FC = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <img src="spinner.svg" alt="" />
        </div>
    )
}

export default Loader;