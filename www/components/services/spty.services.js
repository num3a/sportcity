(function(window, angular, undefined) {'use strict';

    var urlBase = "http://localhost:3000/api";
    var authHeader = 'authorization';

    /**
     * @ngdoc overview
     * @name spty.services
     * @module
     * @description
     *
     * The `spty.services` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("spty.services", ['ngResource']);

    /**
     * @ngdoc object
     * @name spty.services.User
     * @header spty.services.User
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `User` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "User",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Users/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__findById__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__destroyById__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__updateById__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Users/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__get__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Queries accessTokens of User.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `filter` – `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__create__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__delete__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$__count__accessTokens
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Counts accessTokens of User.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/Users/:id/accessTokens/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#create
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#createMany
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Users",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#upsert
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Users",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#exists
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Users/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#findById
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Users/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#find
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Users",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#findOne
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Users/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#updateAll
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/Users/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#deleteById
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/Users/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#count
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Users/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#prototype$updateAttributes
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Users/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#login
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Users/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#logout
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Logout a user with access token
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Users/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#confirm
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` – `{string}` -
                     *
                     *  - `token` – `{string}` -
                     *
                     *  - `redirect` – `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/Users/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#resetPassword
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Reset password for a user with email
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/Users/reset",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.User#getCurrent
                     * @methodOf spty.services.User
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/Users" + "/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__ : true
                    }
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.User#updateOrCreate
             * @methodOf spty.services.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.User#update
             * @methodOf spty.services.User
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.User#destroyById
             * @methodOf spty.services.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.User#removeById
             * @methodOf spty.services.User
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.User#getCachedCurrent
             * @methodOf spty.services.User
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link spty.services.User#login} or
             * {@link spty.services.User#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A User instance.
             */
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name spty.services.User#isAuthenticated
             * @methodOf spty.services.User
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name spty.services.User#getCurrentId
             * @methodOf spty.services.User
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name spty.services.User#modelName
             * @propertyOf spty.services.User
             * @description
             * The name of the model represented by this $resource,
             * i.e. `User`.
             */
            R.modelName = "User";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name spty.services.Messages
     * @header spty.services.Messages
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Messages` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Messages",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Messages/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#create
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Messages",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#createMany
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Messages",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#upsert
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Messages",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#exists
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Messages/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#findById
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Messages/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#find
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Messages",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#findOne
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Messages/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#updateAll
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/Messages/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#deleteById
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/Messages/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#count
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Messages/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Messages#prototype$updateAttributes
                     * @methodOf spty.services.Messages
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Messages` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Messages/:id",
                        method: "PUT"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.Messages#updateOrCreate
             * @methodOf spty.services.Messages
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Messages` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.Messages#update
             * @methodOf spty.services.Messages
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.Messages#destroyById
             * @methodOf spty.services.Messages
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.Messages#removeById
             * @methodOf spty.services.Messages
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name spty.services.Messages#modelName
             * @propertyOf spty.services.Messages
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Messages`.
             */
            R.modelName = "Messages";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name spty.services.PaymentMethods
     * @header spty.services.PaymentMethods
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `PaymentMethods` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "PaymentMethods",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/PaymentMethods/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#create
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/PaymentMethods",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#createMany
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/PaymentMethods",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#upsert
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/PaymentMethods",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#exists
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/PaymentMethods/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#findById
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/PaymentMethods/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#find
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/PaymentMethods",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#findOne
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/PaymentMethods/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#updateAll
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/PaymentMethods/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#deleteById
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/PaymentMethods/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#count
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/PaymentMethods/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.PaymentMethods#prototype$updateAttributes
                     * @methodOf spty.services.PaymentMethods
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `PaymentMethods` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/PaymentMethods/:id",
                        method: "PUT"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.PaymentMethods#updateOrCreate
             * @methodOf spty.services.PaymentMethods
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `PaymentMethods` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.PaymentMethods#update
             * @methodOf spty.services.PaymentMethods
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.PaymentMethods#destroyById
             * @methodOf spty.services.PaymentMethods
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.PaymentMethods#removeById
             * @methodOf spty.services.PaymentMethods
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name spty.services.PaymentMethods#modelName
             * @propertyOf spty.services.PaymentMethods
             * @description
             * The name of the model represented by this $resource,
             * i.e. `PaymentMethods`.
             */
            R.modelName = "PaymentMethods";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name spty.services.Booking
     * @header spty.services.Booking
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Booking` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Booking",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Bookings/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#create
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Bookings",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#createMany
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Bookings",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#upsert
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Bookings",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#exists
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Bookings/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#findById
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Bookings/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#find
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Bookings",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#findOne
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Bookings/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#updateAll
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/Bookings/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#deleteById
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/Bookings/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#count
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Bookings/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Booking#prototype$updateAttributes
                     * @methodOf spty.services.Booking
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Booking` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Bookings/:id",
                        method: "PUT"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.Booking#updateOrCreate
             * @methodOf spty.services.Booking
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Booking` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.Booking#update
             * @methodOf spty.services.Booking
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.Booking#destroyById
             * @methodOf spty.services.Booking
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.Booking#removeById
             * @methodOf spty.services.Booking
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name spty.services.Booking#modelName
             * @propertyOf spty.services.Booking
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Booking`.
             */
            R.modelName = "Booking";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name spty.services.Talk
     * @header spty.services.Talk
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Talk` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Talk",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Talks/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#create
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Talks",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#createMany
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Talks",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#upsert
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Talks",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#exists
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Talks/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#findById
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Talks/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#find
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Talks",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#findOne
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Talks/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#updateAll
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/Talks/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#deleteById
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/Talks/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#count
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Talks/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Talk#prototype$updateAttributes
                     * @methodOf spty.services.Talk
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Talk` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Talks/:id",
                        method: "PUT"
                    },
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.Talk#updateOrCreate
             * @methodOf spty.services.Talk
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Talk` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.Talk#update
             * @methodOf spty.services.Talk
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.Talk#destroyById
             * @methodOf spty.services.Talk
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.Talk#removeById
             * @methodOf spty.services.Talk
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];


            /**
             * @ngdoc property
             * @name spty.services.Talk#modelName
             * @propertyOf spty.services.Talk
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Talk`.
             */
            R.modelName = "Talk";


            return R;
        }]);

    /**
     * @ngdoc object
     * @name spty.services.Coaches
     * @header spty.services.Coaches
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `Coaches` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "Coaches",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/Coaches/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__findById__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Coaches/:id/accessTokens/:fk",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__destroyById__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Coaches/:id/accessTokens/:fk",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__updateById__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        params: {
                            'fk': '@fk'
                        },
                        url: urlBase + "/Coaches/:id/accessTokens/:fk",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__get__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Queries accessTokens of Coaches.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `filter` – `{object=}` -
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        isArray: true,
                        url: urlBase + "/Coaches/:id/accessTokens",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__create__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/Coaches/:id/accessTokens",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__delete__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/Coaches/:id/accessTokens",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$__count__accessTokens
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Counts accessTokens of Coaches.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/Coaches/:id/accessTokens/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#create
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/Coaches",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#createMany
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "createMany": {
                        isArray: true,
                        url: urlBase + "/Coaches",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#upsert
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/Coaches",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#exists
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` -
                     */
                    "exists": {
                        url: urlBase + "/Coaches/:id/exists",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#findById
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Find a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/Coaches/:id",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#find
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Array.<Object>,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "find": {
                        isArray: true,
                        url: urlBase + "/Coaches",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#findOne
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/Coaches/findOne",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#updateAll
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Update instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "updateAll": {
                        url: urlBase + "/Coaches/update",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#deleteById
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Delete a model instance by id from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "deleteById": {
                        url: urlBase + "/Coaches/:id",
                        method: "DELETE"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#count
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` -
                     */
                    "count": {
                        url: urlBase + "/Coaches/count",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#prototype$updateAttributes
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Update attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `Coaches` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/Coaches/:id",
                        method: "PUT"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#login
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *   Default value: `user`.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     *
                     *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
                     *
                     *
                     */
                    "login": {
                        params: {
                            include: "user"
                        },
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Coaches/login",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#logout
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Logout a user with access token
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.clearUser();
                                LoopBackAuth.clearStorage();
                                return response.resource;
                            }
                        },
                        url: urlBase + "/Coaches/logout",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#confirm
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` – `{string}` -
                     *
                     *  - `token` – `{string}` -
                     *
                     *  - `redirect` – `{string=}` -
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/Coaches/confirm",
                        method: "GET"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#resetPassword
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Reset password for a user with email
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {function(Object,Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/Coaches/reset",
                        method: "POST"
                    },

                    /**
                     * @ngdoc method
                     * @name spty.services.Coaches#getCurrent
                     * @methodOf spty.services.Coaches
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {function(Object,Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @returns {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/Coaches" + "/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            },
                        },
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserData = response.data;
                                return response.resource;
                            }
                        },
                        __isGetCurrentUser__ : true
                    }
                }
            );



            /**
             * @ngdoc method
             * @name spty.services.Coaches#updateOrCreate
             * @methodOf spty.services.Coaches
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Coaches` object.)
             * </em>
             */
            R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name spty.services.Coaches#update
             * @methodOf spty.services.Coaches
             *
             * @description
             *
             * Update instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name spty.services.Coaches#destroyById
             * @methodOf spty.services.Coaches
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.Coaches#removeById
             * @methodOf spty.services.Coaches
             *
             * @description
             *
             * Delete a model instance by id from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name spty.services.Coaches#getCachedCurrent
             * @methodOf spty.services.Coaches
             *
             * @description
             *
             * Get data of the currently logged user that was returned by the last
             * call to {@link spty.services.Coaches#login} or
             * {@link spty.services.Coaches#getCurrent}. Return null when there
             * is no user logged in or the data of the current user were not fetched
             * yet.
             *
             * @returns {Object} A Coaches instance.
             */
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };

            /**
             * @ngdoc method
             * @name spty.services.Coaches#isAuthenticated
             * @methodOf spty.services.Coaches
             *
             * @returns {boolean} True if the current user is authenticated (logged in).
             */
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            /**
             * @ngdoc method
             * @name spty.services.Coaches#getCurrentId
             * @methodOf spty.services.Coaches
             *
             * @returns {Object} Id of the currently logged-in user or null.
             */
            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };

            /**
             * @ngdoc property
             * @name spty.services.Coaches#modelName
             * @propertyOf spty.services.Coaches
             * @description
             * The name of the model represented by this $resource,
             * i.e. `Coaches`.
             */
            R.modelName = "Coaches";


            return R;
        }]);


    module
        .factory('LoopBackAuth', function() {
            var props = ['accessTokenId', 'currentUserId'];
            var propsPrefix = '$LoopBack$';

            function LoopBackAuth() {
                var self = this;
                props.forEach(function(name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.save = function() {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function(name) {
                    save(storage, name, self[name]);
                });
            };

            LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
                this.accessTokenId = accessTokenId;
                this.currentUserId = userId;
                this.currentUserData = userData;
            }

            LoopBackAuth.prototype.clearUser = function() {
                this.accessTokenId = null;
                this.currentUserId = null;
                this.currentUserData = null;
            }

            LoopBackAuth.prototype.clearStorage = function() {
                props.forEach(function(name) {
                    save(sessionStorage, name, null);
                    save(localStorage, name, null);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                var key = propsPrefix + name;
                if (value == null) value = '';
                storage[key] = value;
            }

            function load(name) {
                var key = propsPrefix + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
            function($q, LoopBackAuth) {
                return {
                    'request': function(config) {

                        // filter out non urlBase requests
                        if (config.url.substr(0, urlBase.length) !== urlBase) {
                            return config;
                        }

                        if (LoopBackAuth.accessTokenId) {
                            config.headers[authHeader] = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: { error: { status: 401 } },
                                status: 401,
                                config: config,
                                headers: function() { return undefined; }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    }
                }
            }])

    /**
     * @ngdoc object
     * @name spty.services.LoopBackResourceProvider
     * @header spty.services.LoopBackResourceProvider
     * @description
     * Use `LoopBackResourceProvider` to change the global configuration
     * settings used by all models. Note that the provider is available
     * to Configuration Blocks only, see
     * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
     * for more details.
     *
     * ## Example
     *
     * ```js
     * angular.module('app')
     *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
     * ```
     */
        .provider('LoopBackResource', function LoopBackResourceProvider() {
            /**
             * @ngdoc method
             * @name spty.services.LoopBackResourceProvider#setAuthHeader
             * @methodOf spty.services.LoopBackResourceProvider
             * @param {string} header The header name to use, e.g. `X-Access-Token`
             * @description
             * Configure the REST transport to use a different header for sending
             * the authentication token. It is sent in the `Authorization` header
             * by default.
             */
            this.setAuthHeader = function(header) {
                authHeader = header;
            };

            /**
             * @ngdoc method
             * @name spty.services.LoopBackResourceProvider#setUrlBase
             * @methodOf spty.services.LoopBackResourceProvider
             * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
             * @description
             * Change the URL of the REST API server. By default, the URL provided
             * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
             */
            this.setUrlBase = function(url) {
                urlBase = url;
            };

            this.$get = ['$resource', function($resource) {
                return function(url, params, actions) {
                    var resource = $resource(url, params, actions);

                    // Angular always calls POST on $save()
                    // This hack is based on
                    // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                    resource.prototype.$save = function(success, error) {
                        // Fortunately, LoopBack provides a convenient `upsert` method
                        // that exactly fits our needs.
                        var result = resource.upsert.call(this, {}, this, success, error);
                        return result.$promise || result;
                    };
                    return resource;
                };
            }];
        });

})(window, window.angular);
