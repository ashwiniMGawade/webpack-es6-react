// create new component in react 

import React from "react";
module.exports =   React.createClass({
 render: function() {
   return (
     <div>
         Hello, {this.props.name}!
     </div>
   );
 },
});
