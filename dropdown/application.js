  var options = {
    thumbnailData: [{
      title: 'Show Courses', 
      number: 12,
      imageUrl: 'https://facebook.github.io/react/img/logo_og.png', 
      header: 'Learn React',
      description: "React is Fantastic!"
    },{
      title: 'Show Courses', 
      number: 20,
      imageUrl: 'http://i.imgur.com/yFeBvMO.png', 
      header: 'Learn Gulp',
      description: "Gulp will speed up your development flow"
    }]
  };

  var element = React.createElement(Thumbnaillist, options);
  React.render(element, document.querySelector('.container'));

  var Badge = React.createClass({displayName: "Badge",
    render: function() {
      return (
        React.createElement("button", {className: "btn btn-primary", type: "button"}, 
          this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
        )
      )
    }
  });
  var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
    render: function(){
        var list = this.props.thumbnailData.map(function(thumbnailProps){
          return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return (
          React.createElement("div", null, list)
        )
    }
  });
  var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function(){
      return (        
        React.createElement("div", {className: "col-sm-6 col-md-4"}, 
          React.createElement("div", {className: "thumbnail"}, 
            React.createElement("img", {src: this.props.imageUrl}), 
            React.createElement("div", {className: "caption"}, 
              React.createElement("h3", null, this.props.header), 
              React.createElement("p", null, this.props.description), 
              React.createElement("p", null, 
                React.createElement(Badge, {title: this.props.title, number: this.props.number})
              )
            )
          )
        )
      )
    }
  });