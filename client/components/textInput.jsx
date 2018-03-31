import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: '' });
  }

  render () {
    return (
      <form className="TextInput" onSubmit={ (e) => {
          e.preventDefault();
          this.props.handleSubmit(this.state.value);
        } }>
        Enter some text:
        <textarea style={{display: 'block'}}
          onChange={(event) => {
            this.setState({ value: event.target.value});
          }} />
        <button type="submit">Label!</button>
      </form>
  )}
}

export default TextInput;
