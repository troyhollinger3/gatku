var app = angular.module('gatku', ['angularFileUpload', 'ngCookies', 'ipCookie', 'ngAnimate', 'angular-stripe', 'ngTouch', 'credit-cards']);

app.config(function(stripeProvider) {

	if (CONFIG.environment === 'production') {
	
		stripeProvider.setPublishableKey('pk_live_5MrQVqT1OSrL1lyeYe54NWgs');

	} else {

		stripeProvider.setPublishableKey('pk_test_iTOIZYCF15Qmpq7CYOqltHCJ');		

	}

});