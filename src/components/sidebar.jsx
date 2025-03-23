export const Sidebar = (
    { children }
    ) => {
        return <div className="xl:block hidden fixed top-0 left-0 w-1/6 h-screen p-6 flex flex-col items-start border-r gap-6">
            {children}
        </div>
    }