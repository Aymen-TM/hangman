import React from 'react'

type WordToGuess = {
  word:string
  letters:string[]
}

const HangManWord = (props: WordToGuess) => {
  return (
    <div className='grid grid-cols-4 gap-2  max-w-[300px] mx-auto mt-5'>
      {
        props.word.split('').map((letter,index)=>(
          <div key={index} className='flex flex-col gap-1 flex-1'>
            <h1 className={`text-4xl text-center uppercase transition-opacity duration-1000 ${props.letters.includes(letter) ? "opacity-100" : "opacity-0"}`}>{props.letters.includes(letter) ? letter : "|"}</h1>
          <span className='w-full h-1 bg-black' />
        </div>
        ))
      }
    </div>
  )
}

export default HangManWord