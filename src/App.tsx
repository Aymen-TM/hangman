import { useEffect, useState } from 'react'
import Hangman from './assets/components/Hangman'
import HangManWord from './assets/components/HangManWord'
import KayBoard from './assets/components/KayBoard'
import wordlist from './wordsList.json'

function App() {

  const [word, setWord] = useState<string>(()=>{
    return wordlist[Math.floor(Math.random() * wordlist.length)]
  })



  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter(
    letter => !word.includes(letter)
  )


  const isLoser = incorrectLetters.length >= word.length
  const isWinner = word.split("")
    .every(letter => guessedLetters.includes(letter))
  

  

  return (
    <div className=' max-w-[800px] flex flex-col items-center gap-6 mx-auto'>
     <div className='text-2xl'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <HangManWord word={word} letters={guessedLetters}  />
      <KayBoard setLetter={setGuessedLetters} letters={guessedLetters} />
    </div>
  )
}

export default App
