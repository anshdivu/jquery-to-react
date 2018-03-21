class IconButton extends React.Component {

  clickHandler = event => {
    event.preventDefault();

    if (!this.props.disabled) {
      this.props.onClick();
    }
  };

  render() {
    const {disabled, buttonText, faIcon, reverseIcon} = this.props;
    const iconClass = 'fa ' + faIcon;

    const disabledStyle = {
      opacity: '.5',
      cursor: 'default',
      transition: 'all .2s linear'
    };

    const icon = <span className="icon is-small"><i className={iconClass}/></span>;
    const text = <span>{buttonText}</span>;

    return (
      <a
        onClick={this.clickHandler}
        className={`button is-info is-rounded`}
        style={disabled ? disabledStyle : {}}
      >
        {reverseIcon ? [icon, text] : [text, icon] }
      </a>
    );
  }
}
