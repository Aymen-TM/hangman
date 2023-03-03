const HEAD = (
  <div
  className="absolute w-[50px] h-[50px] rounded-full border border-[10px] border-solid  border-black bg-white top-[50px] -right-[20px]"
  />
)

const BODY = (
  <div
  className="absolute w-[10px] h-[100px]   bg-black top-[100px] right-[0]"
  />
)

const RIGHT_ARM = (
  <div
 
    className="absolute w-[100px] h-[10px] origin-bottom-left bg-black top-[150px] -rotate-[30deg] -right-[100px]"
  />
)

const LEFT_ARM = (
  <div
    className="absolute w-[100px] origin-bottom-right h-[10px] bg-black top-[150px] rotate-[30deg] right-[10px]"
  />
)

const RIGHT_LEG = (
  <div
  className="absolute w-[100px] origin-bottom-left h-[10px] bg-black top-[190px] rotate-[60deg] -right-[90px]"


  />
)

const LEFT_LEG = (
  <div
  className="absolute w-[100px] origin-bottom-right h-[10px] bg-black top-[190px] -rotate-[60deg] right-[0]"
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export default function Hangman({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="h-[50px] w-[10px] bg-black absolute top-0 right-0"/>
      <div className="h-[10px] w-[300px] bg-black ml-[120px]"/>
      <div className="h-[400px] w-[10px] bg-black ml-[120px]"/>
      <div className="h-[10px] w-[250px] bg-black ml-[120px]" />
    </div>
  )
}