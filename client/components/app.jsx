import React from 'react';
import TextInput from './textInput';

const { tagText, makeSpanArray } = require('./tagText');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: [] };

    this.tagText = tagText;
    this.makeSpanArray = makeSpanArray;
  }

  handleSubmit (text) {
    const taggedText = text.split('\n').map(line => tagText(line));
    const spanArrays =  taggedText.map(line => makeSpanArray(line));
    this.setState({ spans: spanArrays });
  }
  render () {
    return (
      <div className='app' style={{ 'fontFamily': 'Gotham, Arial, Helvetica, sans-serif'}}>
        <TextInput handleSubmit={(text) => { this.handleSubmit(text); }}/>
        Result: {
          this.state.spans.map((line, index) => 
            (<div key={index + line} style={{ display: 'block' }}>{ line }</div>)
          )
          }
      </div>
    );
  }  
}
export default App;
