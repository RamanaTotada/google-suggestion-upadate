import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionupadate: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  suggestionAdded = suggestion => {
    this.setState({suggestionupadate: suggestion})
  }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state
    console.log(searchInput)

    const searchSuggestionList = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    const {suggestionupadate} = this.state
    return (
      <div className="outer-container">
        <div className="google-container">
          <img
            className="google-name"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          />

          <div className="search-container">
            <div className="input-container">
              <img
                className="search-icon-style"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search-Google"
                value={suggestionupadate}
                onChange={this.onChangeInput}
              />
            </div>

            <ul className="suggestion-container">
              {searchSuggestionList.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionDetails={each}
                  suggestionAdded={this.suggestionAdded}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
