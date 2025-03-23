export const SidebarHeader = () => {
    return <div className="flex justify-between">
        <div className="bg-blue-600 py-3 px-4 w-1/2 flex items-center rounded-md">
            <span className="cursor-pointer text-white">Webinar.gg</span>
        </div>

        <span className="relative h-10 w-10 overflow-hidden rounded-lg">        
            <img className="h-full w-full aspect-square" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf4R5qPKHPNMyAqV-FjS_OTBB8pfUV29Phg&s"/>
        </span>
    </div>
}