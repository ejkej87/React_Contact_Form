var Contact = React.createClass({
   propTypes: {
      item: React.PropTypes.object.isRequired,
   },

   render: function() {
      return (
         React.createElement('div', {className: 'contactItem'},
                             React.createElement('img', {
            className: 'contactImage',
            src: 'https://www.shareicon.net/download/2015/08/22/89359_contact_512x512.png'
         }),
                             React.createElement('p', {className: 'contactLabel'}, 'Imię: ' + this.props.item.firstName),
                             React.createElement('p', {className: 'contactLabel'}, 'Nazwisko: ' + this.props.item.lastName),
                             React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email},
                                                 this.props.item.email
                                                )
                            )
      )
   },
});