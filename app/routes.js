angular.module("app").config(function($routeProvider){
    $routeProvider.when("/",{
        templateUrl: "app/templates/home.html"
    })
    .when("/collection",{
        templateUrl: "app/templates/collection.html"
    })
    .when("/comingsoon",{
        templateUrl: "app/templates/comingsoon.html"
    })
    .when("/newsletter",{
        templateUrl: "app/templates/newsletter.html"
    })
    .when("/privacy",{
        templateUrl: "app/templates/privacy.html"
    })
    .otherwise({
        templateUrl: "app/templates/error.html"
    });
});