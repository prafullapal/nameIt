import React from 'react';
import Header from '../Header/header';
import SearchBox from '../SearchBox/SearchBox';
import Results from '../ResultsContainer/ResultsContainer';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !inputText.length,
            suggestedNames: name(inputText),
        });
    };
    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <Results suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
