const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
    console.log("abc");
  }
  //TODO : this is temporary token for testing without cookie
 //token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MzUxNGRlODU3NWQwNTA1OWIxN2ExYyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE0NzU4MDM0fQ.3qD4azecRt9ZqUgUedgYAt_gX9tcfUrckGKDRMCGuqs"

  return token;
};