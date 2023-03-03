import React from 'react'

type KeyBoard = {
  setLetter:Function
  letters:string[]
}

const KayBoard = (props: KeyBoard) => {
  const alphabets: string[] = Array.from({length: 26}, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

  return (
    <div className='flex gap-4  max-w-[500px] mx-auto flex-wrap mt-6 justify-center items-center'>
      {
        alphabets.map((letter,index)=>(
          <div key={index} className='aspect-square h-7 flex justify-center items-center border-solid border border-blue-500 bg-white text-lg select-none text-black text-center cursor-pointer' onClick={()=>props.setLetter([...props.letters,letter])}>{letter}</div>
        ))
      }
    </div>
  )
}

export default KayBoard