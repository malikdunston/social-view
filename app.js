var app = angular.module('app', ['ui.router']);

app.controller("mainCtrl", function ($scope) {
	$scope.data = window.data;
	$scope.newData = {
		'facebook': [],
		'instagram': [],
		'twitter': [],
		'gallery': []
	};
	for (var i = 0; i < $scope.data.length; i++) {
		var x = $scope.data[i];
		if (x.type == "facebook") {
			$scope.newData.facebook.push(x);
		} else if (x.type == "instagram") {
			$scope.newData.instagram.push(x);
		} else if (x.type == "tweet") {
			$scope.newData.twitter.push(x);
		} else {
			$scope.newData.gallery.push(x);
		}
	};
});
app
	.component("facebookItem", {
		templateUrl: "facebook-item.html",
		bindings: {
			item: "<"
		}
	})
	.component("twitterItem", {
		templateUrl: "twitter-item.html",
		bindings: {
			item: "<"
		}
	})
	.component("instagramItem", {
		template: "<div><img src='{{$ctrl.item.data.images.standard_resolution.url}}' alt=''/><a href=''>{{$ctrl.item.data.user.full_name}}</a><p>{{$ctrl.item.data.caption.text}}</p></div>",
		bindings: {
			item: "<"
		}
	})
	.component("galleryItem", {
		template: "<div><img src='{{$ctrl.item.data.poster.large.url}}' alt=''/><p>{{$ctrl.item.data.title}}</p></div>",
		bindings: {
			item: "<"
		}
	});

app
	.config(["$stateProvider", "$locationProvider", function ($stateProvider, $locationProvider) {
		$locationProvider.html5Mode({
			enabled: true,
			// requireBase: false
		});
		$stateProvider
			.state('home', {
				url: "/",
				templateUrl: "home.html",
				controller: "mainCtrl"
			})
			.state('facebook', {
				url: "/facebook",
				templateUrl: "facebook.html",
				controller: "mainCtrl"
			})
			.state('twitter', {
				url: "/twitter",
				templateUrl: "twitter.html",
				controller: "mainCtrl"
			})
			.state('instagram', {
				url: "/instagram",
				templateUrl: "instagram.html",
				controller: "mainCtrl"
			})
			.state('galleries', {
				url: "/galleries",
				templateUrl: "galleries.html",
				controller: "mainCtrl"
			})
	}]);