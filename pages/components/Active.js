import clsx from "clsx"

export default function Active({type, className, onClick = () => {}}) {
    const btnType = (type) => {
        if(type == "Active")
            return "bg-white hover:bg-white-800 text-black font-bold py-2 px-4 rounded-lg transition ease-in-out mx-auto"
        if(type == "Non-Active")
            return "bg-black text-white py-2 px-2 rounded-lg transition font-bold ease-in-out w-[80px]"
    }
    return (
        <>
            <button className={clsx(btnType(type), className)} onClick={onClick}>
                {type}
            </button>
        </>
    )
}