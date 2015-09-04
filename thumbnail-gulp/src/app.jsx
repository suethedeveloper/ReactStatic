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
