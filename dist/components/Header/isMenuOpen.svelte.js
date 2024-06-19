let isHeaderOpen = $state(false);
export function toggleHeader() {
    return {
        get isHeaderOpen() {
            return isHeaderOpen;
        },
        set isHeaderOpen(isOpen) {
            isHeaderOpen = isOpen;
        },
    };
}
