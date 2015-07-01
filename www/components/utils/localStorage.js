/*
    http://learn.ionicframework.com/formulas/localstorage/
    <!-- config.xml -->
    
    <?xml version='1.0' encoding='utf-8'?>
    <widget ...>
      <preference name="BackupWebStorage" value="none" />
    </widget>
*/

angular.module('spty.utils',[])
.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}]);