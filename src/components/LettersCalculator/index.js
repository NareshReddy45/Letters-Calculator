import './index.css'
import {useState} from 'react'

function LettersCalculator() {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <div className="bg-container">
      <div>
        <h1>Calculate the Letters you enter</h1>
        <label htmlFor="phraseInput">Enter the phrase</label>
        <input
          id="phraseInput"
          type="text"
          placeholder="Enter the phrase"
          onChange={handleInputChange}
          value={inputValue}
        />
        <p className="para-box">
          No.of letters: {inputValue.length === 0 ? 0 : inputValue.length}
        </p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    </div>
  )
}

export default LettersCalculator
