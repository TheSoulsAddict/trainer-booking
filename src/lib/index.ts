// place files you want to import through the `$lib` alias in this folder.

function dotwTranslator(index: number): string {
	switch (index) {
		case 1:
			return 'Po';
		case 2:
			return 'Út';
		case 3:
			return 'St';
		case 4:
			return 'Čt';
		case 5:
			return 'Pá';
		case 6:
			return 'So';
		case 7:
			return 'Ne';
		default:
			return '';
	}
}

export function getDotw(date_string: string): string {
	const date = new Date(parseInt(date_string) * 1000);
	const dotw_index = date.getDay();
	const dotw_string = dotwTranslator(dotw_index);
	return dotw_string;
}

export function formatDate(date_string: string): string {
	const date = new Date(parseInt(date_string) * 1000);
	const day = date.getDate().toString();
	const month = date.getMonth().toString();
	const year = date.getFullYear().toString();
	return day + '. ' + month + '. ' + year;
}
