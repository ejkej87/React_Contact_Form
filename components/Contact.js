var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2f6bz4N1XJFmykHlXC8CmAlk1Q_NbI0WNDU5T5J-GeapeUYAog'} />
        <p className={'contactLabel'}>Imię: {this.props.item.firstName}</p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>{this.props.item.email}</a>
      </div>
    )
  }
})
