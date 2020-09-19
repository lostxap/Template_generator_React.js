#!/usr/bin/env node


const fs = require('fs');


var reactxx = `
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <body>
  
    <div id="mydiv"></div>

    <script type="text/babel">
      class Hello extends React.Component {
        render() {
          return <h1>Hello World!</h1>
        }
      }

      ReactDOM.render(<Hello />, document.getElementById('mydiv'))
    </script>
  </body>
</html>
`



fs.mkdirSync('reactx', err => {
    if(err){
        console.log(err)
    }else{
        console.log('Bun')
    }
});


fs.accessSync('reactx/' , err => {
    if(err){
        console.log(err)
    }else{
        console.log('Bun')
    }
});


fs.writeFileSync('reactx/react.html' , reactxx, err => {
    if(err){
            console.log(err)
    }else{
            console.log('Bun')
     }})