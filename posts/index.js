const express = require( "express" )
const { randomBytes } = require( "crypto" )
const bodyParser = require( "body-parser" )
const app = express()
const PORT = 4000

app.use( bodyParser.json() )

const posts = []

app.get( "/posts", ( req, res ) => {
  return res.send( posts )
} )

app.post( '/posts', ( req, res ) => {
  let id = randomBytes( 4 ).toString( 'hex' )
  let { title } = req.body
  posts.push( { id, title } )

  return res.status( 201 ).send( { status: "Added a post" } )
} )

//LISTEN Route
app.listen( PORT, ( err ) => {
  if ( err ) return console.log( `Error in running at port ${ PORT }` )
  console.log( `Server running at PORT ${ PORT }` )
} )
