app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback',
  passport.autheticate('google', { failureRedirct: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

