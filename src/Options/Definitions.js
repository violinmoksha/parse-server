/*
**** GENERATED CODE ****
This code has been generated by resources/buildConfigDefinitions.js
Do not edit manually, but update Options/index.js
*/"use strict";

var parsers = require("./parsers");

module.exports.ParseServerOptions = {
  "appId": {
    "env": "PARSE_SERVER_APPLICATION_ID",
    "help": "Your Parse Application ID",
    "required": true
  },
  "masterKey": {
    "env": "PARSE_SERVER_MASTER_KEY",
    "help": "Your Parse Master Key",
    "required": true
  },
  "serverURL": {
    "env": "PARSE_SERVER_URL",
    "help": "URL to your parse server with http:// or https://.",
    "required": true
  },
  "masterKeyIps": {
    "env": "PARSE_SERVER_MASTER_KEY_IPS",
    "help": "Restrict masterKey to be used by only these ips. defaults to [] (allow all ips)",
    "action": parsers.arrayParser,
    "default": []
  },
  "appName": {
    "env": "PARSE_SERVER_APP_NAME",
    "help": "Sets the app name"
  },
  "analyticsAdapter": {
    "env": "PARSE_SERVER_ANALYTICS_ADAPTER",
    "help": "Adapter module for the analytics",
    "action": parsers.moduleOrObjectParser
  },
  "filesAdapter": {
    "env": "PARSE_SERVER_FILES_ADAPTER",
    "help": "Adapter module for the files sub-system",
    "action": parsers.moduleOrObjectParser
  },
  "push": {
    "env": "PARSE_SERVER_PUSH",
    "help": "Configuration for push, as stringified JSON. See http://docs.parseplatform.org/parse-server/guide/#push-notifications",
    "action": parsers.objectParser
  },
  "scheduledPush": {
    "env": "PARSE_SERVER_SCHEDULED_PUSH",
    "help": "Configuration for push scheduling. Defaults to false.",
    "action": parsers.booleanParser,
    "default": false
  },
  "loggerAdapter": {
    "env": "PARSE_SERVER_LOGGER_ADAPTER",
    "help": "Adapter module for the logging sub-system",
    "action": parsers.moduleOrObjectParser
  },
  "jsonLogs": {
    "env": "JSON_LOGS",
    "help": "Log as structured JSON objects",
    "action": parsers.booleanParser
  },
  "logsFolder": {
    "env": "PARSE_SERVER_LOGS_FOLDER",
    "help": "Folder for the logs (defaults to './logs'); set to null to disable file based logging",
    "default": "./logs"
  },
  "verbose": {
    "env": "VERBOSE",
    "help": "Set the logging to verbose",
    "action": parsers.booleanParser
  },
  "logLevel": {
    "env": "PARSE_SERVER_LOG_LEVEL",
    "help": "Sets the level for logs"
  },
  "silent": {
    "env": "SILENT",
    "help": "Disables console output",
    "action": parsers.booleanParser
  },
  "databaseURI": {
    "env": "PARSE_SERVER_DATABASE_URI",
    "help": "The full URI to your mongodb database",
    "required": true,
    "default": "mongodb://localhost:27017/parse"
  },
  "databaseOptions": {
    "env": "PARSE_SERVER_DATABASE_OPTIONS",
    "help": "Options to pass to the mongodb client",
    "action": parsers.objectParser
  },
  "databaseAdapter": {
    "env": "PARSE_SERVER_DATABASE_ADAPTER",
    "help": "Adapter module for the database",
    "action": parsers.moduleOrObjectParser
  },
  "cloud": {
    "env": "PARSE_SERVER_CLOUD",
    "help": "Full path to your cloud code main.js"
  },
  "collectionPrefix": {
    "env": "PARSE_SERVER_COLLECTION_PREFIX",
    "help": "A collection prefix for the classes",
    "default": ""
  },
  "clientKey": {
    "env": "PARSE_SERVER_CLIENT_KEY",
    "help": "Key for iOS, MacOS, tvOS clients"
  },
  "javascriptKey": {
    "env": "PARSE_SERVER_JAVASCRIPT_KEY",
    "help": "Key for the Javascript SDK"
  },
  "dotNetKey": {
    "env": "PARSE_SERVER_DOT_NET_KEY",
    "help": "Key for Unity and .Net SDK"
  },
  "restAPIKey": {
    "env": "PARSE_SERVER_REST_API_KEY",
    "help": "Key for REST calls"
  },
  "readOnlyMasterKey": {
    "env": "PARSE_SERVER_READ_ONLY_MASTER_KEY",
    "help": "Read-only key, which has the same capabilities as MasterKey without writes"
  },
  "webhookKey": {
    "env": "PARSE_SERVER_WEBHOOK_KEY",
    "help": "Key sent with outgoing webhook calls"
  },
  "fileKey": {
    "env": "PARSE_SERVER_FILE_KEY",
    "help": "Key for your files"
  },
  "preserveFileName": {
    "env": "PARSE_SERVER_PRESERVE_FILE_NAME",
    "help": "Enable (or disable) the addition of a unique hash to the file names",
    "action": parsers.booleanParser,
    "default": false
  },
  "userSensitiveFields": {
    "env": "PARSE_SERVER_USER_SENSITIVE_FIELDS",
    "help": "Personally identifiable information fields in the user table the should be removed for non-authorized users.",
    "action": parsers.arrayParser,
    "default": ["email"]
  },
  "enableAnonymousUsers": {
    "env": "PARSE_SERVER_ENABLE_ANON_USERS",
    "help": "Enable (or disable) anon users, defaults to true",
    "action": parsers.booleanParser,
    "default": true
  },
  "allowClientClassCreation": {
    "env": "PARSE_SERVER_ALLOW_CLIENT_CLASS_CREATION",
    "help": "Enable (or disable) client class creation, defaults to true",
    "action": parsers.booleanParser,
    "default": true
  },
  "auth": {
    "env": "PARSE_SERVER_AUTH_PROVIDERS",
    "help": "Configuration for your authentication providers, as stringified JSON. See http://docs.parseplatform.org/parse-server/guide/#oauth-and-3rd-party-authentication",
    "action": parsers.objectParser
  },
  "maxUploadSize": {
    "env": "PARSE_SERVER_MAX_UPLOAD_SIZE",
    "help": "Max file size for uploads. defaults to 20mb",
    "default": "20mb"
  },
  "verifyUserEmails": {
    "env": "PARSE_SERVER_VERIFY_USER_EMAILS",
    "help": "Enable (or disable) user email validation, defaults to false",
    "action": parsers.booleanParser,
    "default": false
  },
  "preventLoginWithUnverifiedEmail": {
    "env": "PARSE_SERVER_PREVENT_LOGIN_WITH_UNVERIFIED_EMAIL",
    "help": "Prevent user from login if email is not verified and PARSE_SERVER_VERIFY_USER_EMAILS is true, defaults to false",
    "action": parsers.booleanParser,
    "default": false
  },
  "emailVerifyTokenValidityDuration": {
    "env": "PARSE_SERVER_EMAIL_VERIFY_TOKEN_VALIDITY_DURATION",
    "help": "Email verification token validity duration",
    "action": parsers.numberParser("emailVerifyTokenValidityDuration")
  },
  "accountLockout": {
    "env": "PARSE_SERVER_ACCOUNT_LOCKOUT",
    "help": "account lockout policy for failed login attempts",
    "action": parsers.objectParser
  },
  "passwordPolicy": {
    "env": "PARSE_SERVER_PASSWORD_POLICY",
    "help": "Password policy for enforcing password related rules",
    "action": parsers.objectParser
  },
  "cacheAdapter": {
    "env": "PARSE_SERVER_CACHE_ADAPTER",
    "help": "Adapter module for the cache",
    "action": parsers.moduleOrObjectParser
  },
  "emailAdapter": {
    "env": "PARSE_SERVER_EMAIL_ADAPTER",
    "help": "Adapter module for the email sending",
    "action": parsers.moduleOrObjectParser
  },
  "publicServerURL": {
    "env": "PARSE_PUBLIC_SERVER_URL",
    "help": "Public URL to your parse server with http:// or https://."
  },
  "customPages": {
    "env": "PARSE_SERVER_CUSTOM_PAGES",
    "help": "custom pages for password validation and reset",
    "action": parsers.objectParser,
    "default": {}
  },
  "liveQuery": {
    "env": "PARSE_SERVER_LIVE_QUERY",
    "help": "parse-server's LiveQuery configuration object",
    "action": parsers.objectParser
  },
  "sessionLength": {
    "env": "PARSE_SERVER_SESSION_LENGTH",
    "help": "Session duration, in seconds, defaults to 1 year",
    "action": parsers.numberParser("sessionLength"),
    "default": 31536000
  },
  "maxLimit": {
    "env": "PARSE_SERVER_MAX_LIMIT",
    "help": "Max value for limit option on queries, defaults to unlimited",
    "action": parsers.numberParser("maxLimit")
  },
  "expireInactiveSessions": {
    "env": "PARSE_SERVER_EXPIRE_INACTIVE_SESSIONS",
    "help": "Sets wether we should expire the inactive sessions, defaults to true",
    "action": parsers.booleanParser,
    "default": true
  },
  "revokeSessionOnPasswordReset": {
    "env": "PARSE_SERVER_REVOKE_SESSION_ON_PASSWORD_RESET",
    "help": "When a user changes their password, either through the reset password email or while logged in, all sessions are revoked if this is true. Set to false if you don't want to revoke sessions.",
    "action": parsers.booleanParser,
    "default": true
  },
  "schemaCacheTTL": {
    "env": "PARSE_SERVER_SCHEMA_CACHE_TTL",
    "help": "The TTL for caching the schema for optimizing read/write operations. You should put a long TTL when your DB is in production. default to 5000; set 0 to disable.",
    "action": parsers.numberParser("schemaCacheTTL"),
    "default": 5000
  },
  "cacheTTL": {
    "env": "PARSE_SERVER_CACHE_TTL",
    "help": "Sets the TTL for the in memory cache (in ms), defaults to 5000 (5 seconds)",
    "action": parsers.numberParser("cacheTTL"),
    "default": 5000
  },
  "cacheMaxSize": {
    "env": "PARSE_SERVER_CACHE_MAX_SIZE",
    "help": "Sets the maximum size for the in memory cache, defaults to 10000",
    "action": parsers.numberParser("cacheMaxSize"),
    "default": 10000
  },
  "enableSingleSchemaCache": {
    "env": "PARSE_SERVER_ENABLE_SINGLE_SCHEMA_CACHE",
    "help": "Use a single schema cache shared across requests. Reduces number of queries made to _SCHEMA. Defaults to false, i.e. unique schema cache per request.",
    "action": parsers.booleanParser,
    "default": false
  },
  "enableExpressErrorHandler": {
    "env": "PARSE_SERVER_ENABLE_EXPRESS_ERROR_HANDLER",
    "help": "Enables the default express error handler for all errors",
    "action": parsers.booleanParser,
    "default": false
  },
  "objectIdSize": {
    "env": "PARSE_SERVER_OBJECT_ID_SIZE",
    "help": "Sets the number of characters in generated object id's, default 10",
    "action": parsers.numberParser("objectIdSize"),
    "default": 10
  },
  "port": {
    "env": "PORT",
    "help": "The port to run the ParseServer. defaults to 1337.",
    "action": parsers.numberParser("port"),
    "default": 1337
  },
  "host": {
    "env": "PARSE_SERVER_HOST",
    "help": "The host to serve ParseServer on. defaults to 0.0.0.0",
    "default": "0.0.0.0"
  },
  "mountPath": {
    "env": "PARSE_SERVER_MOUNT_PATH",
    "help": "Mount path for the server, defaults to /parse",
    "default": "/parse"
  },
  "cluster": {
    "env": "PARSE_SERVER_CLUSTER",
    "help": "Run with cluster, optionally set the number of processes default to os.cpus().length",
    "action": parsers.numberOrBooleanParser
  },
  "middleware": {
    "env": "PARSE_SERVER_MIDDLEWARE",
    "help": "middleware for express server, can be string or function"
  },
  "startLiveQueryServer": {
    "env": "PARSE_SERVER_START_LIVE_QUERY_SERVER",
    "help": "Starts the liveQuery server",
    "action": parsers.booleanParser
  },
  "liveQueryServerOptions": {
    "env": "PARSE_SERVER_LIVE_QUERY_SERVER_OPTIONS",
    "help": "Live query server configuration options (will start the liveQuery server)",
    "action": parsers.objectParser
  }
};
module.exports.CustomPagesOptions = {
  "invalidLink": {
    "env": "PARSE_SERVER_CUSTOM_PAGES_INVALID_LINK",
    "help": "invalid link page path"
  },
  "verifyEmailSuccess": {
    "env": "PARSE_SERVER_CUSTOM_PAGES_VERIFY_EMAIL_SUCCESS",
    "help": "verify email success page path"
  },
  "choosePassword": {
    "env": "PARSE_SERVER_CUSTOM_PAGES_CHOOSE_PASSWORD",
    "help": "choose password page path"
  },
  "passwordResetSuccess": {
    "env": "PARSE_SERVER_CUSTOM_PAGES_PASSWORD_RESET_SUCCESS",
    "help": "password reset success page path"
  }
};
module.exports.LiveQueryOptions = {
  "classNames": {
    "env": "PARSE_SERVER_LIVEQUERY_CLASSNAMES",
    "help": "parse-server's LiveQuery classNames",
    "action": parsers.arrayParser
  },
  "redisURL": {
    "env": "PARSE_SERVER_LIVEQUERY_REDIS_URL",
    "help": "parse-server's LiveQuery redisURL"
  },
  "pubSubAdapter": {
    "env": "PARSE_SERVER_LIVEQUERY_PUB_SUB_ADAPTER",
    "help": "LiveQuery pubsub adapter",
    "action": parsers.moduleOrObjectParser
  }
};
module.exports.LiveQueryServerOptions = {
  "appId": {
    "env": "PARSE_LIVE_QUERY_SERVER_APP_ID",
    "help": "This string should match the appId in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same appId."
  },
  "masterKey": {
    "env": "PARSE_LIVE_QUERY_SERVER_MASTER_KEY",
    "help": "This string should match the masterKey in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same masterKey."
  },
  "serverURL": {
    "env": "PARSE_LIVE_QUERY_SERVER_SERVER_URL",
    "help": "This string should match the serverURL in use by your Parse Server. If you deploy the LiveQuery server alongside Parse Server, the LiveQuery server will try to use the same serverURL."
  },
  "keyPairs": {
    "env": "PARSE_LIVE_QUERY_SERVER_KEY_PAIRS",
    "help": "A JSON object that serves as a whitelist of keys. It is used for validating clients when they try to connect to the LiveQuery server. Check the following Security section and our protocol specification for details.",
    "action": parsers.objectParser
  },
  "websocketTimeout": {
    "env": "PARSE_LIVE_QUERY_SERVER_WEBSOCKET_TIMEOUT",
    "help": "Number of milliseconds between ping/pong frames. The WebSocket server sends ping/pong frames to the clients to keep the WebSocket alive. This value defines the interval of the ping/pong frame from the server to clients. Defaults to 10 * 1000 ms (10 s).",
    "action": parsers.numberParser("websocketTimeout")
  },
  "cacheTimeout": {
    "env": "PARSE_LIVE_QUERY_SERVER_CACHE_TIMEOUT",
    "help": "Number in milliseconds. When clients provide the sessionToken to the LiveQuery server, the LiveQuery server will try to fetch its ParseUser's objectId from parse server and store it in the cache. The value defines the duration of the cache. Check the following Security section and our protocol specification for details. Defaults to 30 * 24 * 60 * 60 * 1000 ms (~30 days).",
    "action": parsers.numberParser("cacheTimeout")
  },
  "logLevel": {
    "env": "PARSE_LIVE_QUERY_SERVER_LOG_LEVEL",
    "help": "This string defines the log level of the LiveQuery server. We support VERBOSE, INFO, ERROR, NONE. Defaults to INFO."
  },
  "port": {
    "env": "PARSE_LIVE_QUERY_SERVER_PORT",
    "help": "The port to run the LiveQuery server. Defaults to 1337.",
    "action": parsers.numberParser("port"),
    "default": 1337
  },
  "redisURL": {
    "env": "PARSE_LIVE_QUERY_SERVER_REDIS_URL",
    "help": "parse-server's LiveQuery redisURL"
  },
  "pubSubAdapter": {
    "env": "PARSE_LIVE_QUERY_SERVER_PUB_SUB_ADAPTER",
    "help": "LiveQuery pubsub adapter",
    "action": parsers.moduleOrObjectParser
  }
};
