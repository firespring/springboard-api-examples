$(document).ready(function () {
	const API_KEY = 'Insert Here';
	const WEBSITE_ID = 'Insert Here';
	$('#get-data').click(function (event) {
		event.preventDefault(); // Prevents a # from entering the url string
		$.ajax({
			type: 'GET',
			url: 'https://my.firespring.com/api/v1/websites/' + WEBSITE_ID + '/messages', // api endpoint can be configured here, or can be configured with orders
			headers: {
				'Authorization': 'Basic ' + btoa(API_KEY + ':'),
				'Content-Type': 'application/json'
			},
			success: function (data) {
				console.log(data); // Handle your success data. As is will show you reponse data
			},
			error: function (e) {
				console.log(e); // Handle your error data, As is will show you the error response
			}
		});
	});
});
