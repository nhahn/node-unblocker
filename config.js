// just "site.com" or "site.com:port", no "http://"
exports.host = null;

// string to specify this server's ip, or null to listen on any ip
exports.ip = process.env.OPENSHIFT_NODEJS_IP;

exports.port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

// if set, GA tracking code will be inserted into the bottom of every page
exports.google_analytics_id = process.env.GA_ID || null;

// this is used connect to keep session cookies secure. You should change this.
exports.secret = process.env.SECRET || "correct horse battery staple";

// for redis if you're running your own copy
exports.redis_host = process.env.OPENSHIFT_REDIS_HOST; 
exports.redis_port = process.env.OPENSHIFT_REDIS_PORT; 
exports.redis_options = {
  auth_pass: process.env.REDIS_PASSWORD
};
