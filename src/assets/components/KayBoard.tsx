import React from 'react'

type KeyBoard = {
  setLetter:Function,
  letters:string[],
  activeLetters:string[],
  inactiveLetters:string[]

}

const KayBoard = (props: KeyBoard) => {
  const alphabets: string[] = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
  

  

  return (
    <div className='grid grid-cols-6 gap-5'>
      {
        alphabets.map((letter,index)=>{
          const isActive = props.activeLetters.includes(letter)
          const isInActive =props.inactiveLetters.includes(letter)
          return(
            <button 
            key={index}
            className={` ${isInActive ? 'border-gray-500 text-gray-500':""}
            ${isActive ? ' border-green-500 text-green-500':""}
             aspect-square hover:bg-blue-400 h-16  flex justify-center uppercase items-center 
            border-solid border-[3px] border-blue-500 bg-white text-2xl select-none text-black text-center cursor-pointer`}
            onClick={()=>  props.setLetter([...props.letters,letter])}
            >{letter}</button>
          )
        })
      }
    </div>
  )
}

export default KayBoard