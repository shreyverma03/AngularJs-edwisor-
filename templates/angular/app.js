
  var myApp = angular.module('blogApp', ['ngRoute']);
    myApp.controller('mainController', function($http) {
      var main=this;
        $http.get("json.json")
        .success(function (response) {
          main.firstData = response;
      });   
        
    });

myApp.controller('singlePageView',['$http','$routeParams',function($http,$routeParams) {

  var main = this;
      main.matchData = JSON.parse($routeParams.matchId);
  }

]); 

myApp.controller('matchDetaliView',['$http','$routeParams',function($http,$routeParams) {

  var main = this;
      main.matchFullDetailsAll1 = $routeParams.matchDetail;

      main.matchFullDetailsAll = JSON.parse(main.matchFullDetailsAll1);
      console.log(main.matchFullDetailsAll);
  }


]); 

myApp.controller('teamStaticsView',['$http','$routeParams',function($http,$routeParams) {

  //create a context
  var main = this;
      main.keyWord=$routeParams.search;
      $http.get("json.json").success(function (response) {
          main.responseData = response;
      main.matchCount = null;
      main.wonMatch = null;
      main.totalGoals = 0;
      main.maxScore = 0;
      main.maxScoreMatch = null;
      main.minScore = 100;
      main.maxScoreMatchName = null;
      for(w in response){
            for(x in response[w].rounds){
              for(y in response[w].rounds[x].matches){
                if(response[w].rounds[x].matches[y].team1.code == main.keyWord){
                  main.teamName = (response[w].rounds[x].matches[y].team1.name);
                  main.matchCount++;
                  if(response[w].rounds[x].matches[y].score1 > response[w].rounds[x].matches[y].score2 ){
                    main.wonMatch++;
                  }
                  main.totalGoals = main.totalGoals + response[w].rounds[x].matches[y].score1;
                  if(response[w].rounds[x].matches[y].score1 > main.maxScore){
                    main.maxScore = response[w].rounds[x].matches[y].score1;
                    main.maxScoreMatch = response[w].rounds[x].matches[y];
                    main.maxScoreMatchName = response[w].rounds[x].name;
                  }
                  if(response[w].rounds[x].matches[y].score1 < main.minScore){
                    main.minScore = response[w].rounds[x].matches[y].score1;
                  }
                }

                if(response[w].rounds[x].matches[y].team2.code == main.keyWord){
                  main.matchCount++;
                  if(response[w].rounds[x].matches[y].score1 < response[w].rounds[x].matches[y].score2 ){
                    main.wonMatch++;
                  }
                main.totalGoals = main.totalGoals + response[w].rounds[x].matches[y].score2;
                if(response[w].rounds[x].matches[y].score2 > main.maxScore){
                    main.maxScore = response[w].rounds[x].matches[y].score2;
                    main.maxScoreMatch = response[w].rounds[x].matches[y];
                    main.maxScoreMatchName = response[w].rounds[x].name;
                  }
                  if(response[w].rounds[x].matches[y].score2 < main.minScore){
                    main.minScore = response[w].rounds[x].matches[y].score2;
                  }
                }
               }
            }
        }
        console.log( main.maxScoreMatch );
       });  
  }// end load all blogs

]); 


// filer by year

myApp.controller('yearDetailView',['$http','$routeParams',function($http,$routeParams) {
  var main = this;
    main.yearId = $routeParams.year;
    $http.get("json.json").success(function (response) {
        if(main.yearId == '0' || main.yearId == '1'){
          main.firstData = response[main.yearId];
        }
      }); 
  }// end load all blogs
  ]); 
  


// filter By name
myApp.controller('filterByName',['$http','$routeParams',function($http,$routeParams) {
  var main = this;
  var output =[];
    main.nameText = $routeParams.nameText;
    $http.get("json.json").success(function (response) {
          for(w in response){
            for(x in response[w].rounds){
              for(y in response[w].rounds[x].matches){
                if(response[w].rounds[x].matches[y].team1.name == main.nameText || response[w].rounds[x].matches[y].team2.name == main.nameText ){
                  output.push(response[w].rounds[x].matches[y]);
                }
              }
            }
          }
          main.firstData = output;
          console.log(main.firstData);
      }); 
  }
  ]); 


myApp.controller('filterByScore',['$http','$routeParams',function($http,$routeParams) {
  var main = this;
  var output =[];
    main.scoreText = $routeParams.scoreText;
    $http.get("json.json").success(function (response) {
          for(w in response){
            for(x in response[w].rounds){
              for(y in response[w].rounds[x].matches){
                if(response[w].rounds[x].matches[y].score1 == main.scoreText || response[w].rounds[x].matches[y].score2 == main.scoreText ){
                  output.push(response[w].rounds[x].matches[y]);
                }
              }
            }
          }
          main.firstData = output;
          console.log(main.firstData);
      }); 
  }
  ]); 