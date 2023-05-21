import clsx from "clsx"

export default function Button({type, className, onClick = () => {}}) { // type = Add, Edit, Delete, Delete All
    const btnType = (type) => {
        if(type == "Add")
            return "bg-blue-400 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out mx-auto"
        if(type == "Edit")
            return "bg-green-400 hover:bg-green-800 hover:text-white py-2 px-2 rounded-lg transition ease-in-out w-[80px]"
        if(type == "Delete")
            return "bg-red-400 hover:bg-red-800 hover:text-white py-2 px-4 rounded-lg transition ease-in-out w-[80px]"
        if(type == "Delete All")
            return "bg-red-400 hover:bg-red-800 text-white py-2 px-4 rounded-lg transition ease-in-out w-[120px] mt-3 font-bold"
        if(type = "+ Add New Employee")
            return "w-full bg-purple-400 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-lg transition ease-in-out mx-auto"
    }
    return (
        <>
            <button className={clsx(btnType(type), className)} onClick={onClick}>
                {type}
            </button>
        </>
    )
}