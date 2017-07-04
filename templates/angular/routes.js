myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl     : 'views/index-view.html',
            controller      : 'mainController',
            controllerAs    : 'dataToPresent'
        })
        .when('/singlePage/:macthId',{
            templateUrl     : 'views/singlePage-view.html',
            controller      : 'singlePageView',
            controllerAs    : 'singleView'
        })
        .when('/matchDetails/:matchDetail',{
            templateUrl     : 'views/matchDetail-view.html',
            controller      : 'matchDetaliView',
            controllerAs    : 'matchViewData'
        })
        .when('/teamDetails/:search',{
            templateUrl     : 'views/teamStatics-view.html',
            controller      : 'teamStaticsView',
            controllerAs    : 'teamStatic'
        })
        .when('/filterByName/:nameText',{
            templateUrl     : 'views/filterByName-view.html',
            controller      : 'filterByName',
            controllerAs    : 'dataToPresent'
        })
        .when('/filterByScore/:scoreText',{
            templateUrl     : 'views/filterByScore-view.html',
            controller      : 'filterByScore',
            controllerAs    : 'dataToPresent'
        })
        .when('/yearDetails/:year',{
            templateUrl     : 'views/year-view.html',
            controller      : 'yearDetailView',
            controllerAs    : 'dataToPresent'
        })
        .otherwise(
            {
                templateUrl     : 'views/index-view.html'
            }
        );
}]);
