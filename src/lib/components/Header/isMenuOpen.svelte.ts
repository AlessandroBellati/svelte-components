let isHeaderOpen = $state(false);

export function toggleHeader() {

	function toggle() {
        isHeaderOpen = !isHeaderOpen
	}

	return {
		get isHeaderOpen() {
			return isHeaderOpen;
		},
		toggle
	};
}

