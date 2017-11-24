﻿angular.module('sevencrm.routes', [])

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('crm', {
        url: '/crm',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('crm.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('crm.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('crm.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/crmLogin.html',
        controller: 'LoginCtrl'
    })

    .state('userlogin', {
        url: '/userlogin/:usu_codi',
        templateUrl: 'templates/crmuserlogin.html',
        controller: 'UserLoginCtrl'
    })

    .state('crm.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                //template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('crm.flujos', {
        url: '/flujos',
        views: {
            'menuContent': {
                templateUrl: 'templates/flujos.html',
                controller: 'FlujosCtrl'
            },
            'fabContent': {}
        }
    })
    .state('crm.actividades', {
        url: '/actividades',
        views: {
            'menuContent': {
                templateUrl: 'templates/actividades.html',
                controller: 'actividadesCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-calm-900" ng-click="crearActividad();"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout, $state, $scope) {
                    $timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);
                    $scope.crearActividad = function () {
                        $state.go("crm.crearactividad", {}, {
                            reload: true
                        });
                    }
                }
            }
        }
    })

    .state('crm.crearactividad', {
        url: '/crearActividad',
        views: {
            'menuContent': {
                templateUrl: 'templates/crearactividad.html',
                controller: 'CrearActividadCtrl'
            },
            'fabContent': {}
        }
    })

    .state('crm.detalleflujo', {
        url: '/detalleFlujo/:cas_cont',
        views: {
            'menuContent': {
                templateUrl: 'templates/detalleFlujo.html',
                controller: 'DetalleFlujoCtrl'
            },
            'fabContent': {}
        }
    })

    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});