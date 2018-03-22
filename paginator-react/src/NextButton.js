class NextButton extends React.Component {
  isDisabled = ({ totalPages, currentPage }) =>
    totalPages <= 1 || currentPage >= totalPages;

  clickHandler = () => {
    let newPage = this.props.currentPage + 1;
    this.props.onClick(newPage);
  };

  render() {
    return (
      <IconButton
        onClick={this.clickHandler}
        faIcon='fa-chevron-right'
        disabled={this.isDisabled(this.props)}
        buttonText='Next' />
    );
  }
}
