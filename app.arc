@app
begin-app

@http
get /
get /data

@tables
users
  username *String
  password **String
  token *String

@static
folder dist
folder public