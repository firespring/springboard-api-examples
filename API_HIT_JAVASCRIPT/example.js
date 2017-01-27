const API_KEY = '';
const WEBSITE_ID = '';
$.ajax({
	type: 'GET',
	url: 'https://my.firespring.dev/api/v1/websites/' + WEBSITE_ID + '/messages', // api endpoint can be configured here
	headers : {
		'Authorization': 'Basic ' + btoa(API_KEY + ':'),
		'Content-Type': 'application/json'
	},
	success: function (data) {
		// Handle a successful call
	},
	error: function () {
		// Handle an error
	}
});
