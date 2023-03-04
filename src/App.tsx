import { useCallback, useEffect, useState } from 'react'
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


  const isLoser = incorrectLetters.length >= 6
  const isWinner = word.split("")
    .every(letter => guessedLetters.includes(letter))

    /* render this function based on useCallbacl deps */
    const addGuessedLetter =  useCallback((key:string)=>{
      if (guessedLetters.includes(key) || isLoser || isWinner) return
      setGuessedLetters(currentLetters => [...currentLetters, key])
    },
    [guessedLetters, isWinner, isLoser]
    )
   
    
    useEffect(() => {
      const key_event_handler = (e:KeyboardEvent)=>{
        const key = e.key
        if(!key.match(/^[a-z]$/)) return
        
        e.preventDefault()
        addGuessedLetter(key)
      }
      
      document.addEventListener('keypress',key_event_handler)
      return () => {
        document.removeEventListener('keypress',key_event_handler)
      }
    }, [guessedLetters])
    
    console.log(word);
    

  

  return (
    <div className=' max-w-[800px] flex flex-col items-center gap-6 lg:mx-auto font-bold'>
     <div className='text-2xl'>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
      <Hangman numberOfGuesses={incorrectLetters.length} />
      <HangManWord word={word} letters={guessedLetters} reveal={isLoser}  />
      <KayBoard setLetter={setGuessedLetters} letters={guessedLetters} activeLetters={guessedLetters.filter(letter =>word.includes(letter))} inactiveLetters={incorrectLetters} />
    </div>
  )
}

export default App
