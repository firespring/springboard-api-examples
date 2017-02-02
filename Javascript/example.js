$(document).ready(function () {
	const API_KEY = 'Insert Here';
	const WEBSITE_ID = 'Insert Here';
	$('#get-data').click(function (event) {
		event.preventDefault();
		$.ajax({
			type: 'GET',
			url: 'https://my.firespring.com/api/v1/websites/' + WEBSITE_ID + '/messages', // api endpoint can be configured here, or can be configured with orders
			headers: {
				'Authorization': 'Basic ' + btoa(API_KEY + ':'),
				'Content-Type': 'application/json'
			},
			success: function (data) {
				console.log(data);
			},
			error: function (e) {
				console.log(e);
			}
		});
	});
});
