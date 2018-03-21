class PreviousButton extends React.Component {
  isDisabled = ({currentPage}) => currentPage <= 1;

  clickHandler = () => {
    let newPage = this.props.currentPage - 1;
    this.props.onClick(newPage);
  };

  render() {

    return (
      <IconButton
        onClick={this.clickHandler}
        faIcon='fa-chevron-left'
        disabled={this.isDisabled(this.props)}
        buttonText='Prev'
        reverseIcon='true' />
    );
  }
}
