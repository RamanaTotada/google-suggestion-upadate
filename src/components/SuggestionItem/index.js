import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, suggestionAdded} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    suggestionAdded(suggestion)
  }

  return (
    <li className="suggestions">
      <p className="each-suggestion">{suggestion}</p>
      <img
        onClick={onClickArrow}
        alt="arrow"
        className="arrow-image"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      />
    </li>
  )
}

export default SuggestionItem
