let isSidebarOpen = $state(false);
export function toggleSidebar() {
    return {
        get isSidebarOpen() {
            return isSidebarOpen;
        },
        set isSidebarOpen(isOpen) {
            isSidebarOpen = isOpen;
        },
    };
}
