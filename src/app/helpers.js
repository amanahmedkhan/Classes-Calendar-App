export const formatDate = (date, addDays = null) => {
	let d = new Date(date);
	addDays && d.setDate(d.getDate() + 7);
	let month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}