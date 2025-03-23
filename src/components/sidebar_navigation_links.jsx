export const SidebarLinkButton = (
    {
        text, image
    }
    ) => {
        return <a className="flex justify-between hover:bg-gray-300 px-4 py-3 rounded-md items-center w-full cursor-pointer transition">
            <p>{text}</p>
            <img src={image} alt="icon" className="h-6 w-6"/> 
        </a>
}