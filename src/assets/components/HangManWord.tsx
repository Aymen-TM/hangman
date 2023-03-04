import React from 'react'

type WordToGuess = {
  word:string
  letters:string[]
  reveal?:boolean
}

const HangManWord = (props: WordToGuess) => {
  return (
    <div className='flex gap-2  mx-auto '>
      {
        props.word.split('').map((letter,index)=>(
        <div key={index} className='flex flex-col gap-1 flex-1'>
          <h1 className={`text-4xl text-center uppercase transition-opacity duration-1000 ${props.reveal ? "text-red-700":""}  ${props.letters.includes(letter) || props.reveal ? "opacity-100" : "opacity-0"}`}>{ letter }</h1>
          <span className='w-[30px] h-1 bg-black' />
        </div>
        ))
      }
    </div>
  )
}

export default HangManWord