@app
begin-app

@http
get /
get /data
post /login

@tables
users
  username *String
  password **String
  token *String

@static
folder dist
folder public