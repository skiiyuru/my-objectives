import { type PropsWithChildren, type FormEvent } from "react"

type LabelProps = PropsWithChildren<{
  htmlFor: string
}>

type InputProps = {
  id: string
  type: string
}

function Label(props: LabelProps) {
  return (
    <label className="block mb-1 text-sm font-medium text-white" {...props}>
      {props.children}
    </label>
  )
}

function Input(props: InputProps) {
  return (
    <input
      className="text-sm rounded-lg w-full p-2.5 bg-gray-700 
			border-gray-600 placeholder-gray-400 text-white 
			focus:ring-purple-500 focus:border-purple-500"
      {...props}
    />
  )
}

export default function NewGoal() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="goal">Your goal</Label>
        <Input id="goal" type="text" />
      </div>
      <div>
        <Label htmlFor="desc">Short summary</Label>
        <Input id="summary" type="text" />
      </div>
      <button
        type="submit"
        className="font-medium rounded-md text-sm w-full sm:w-auto 
				px-5 py-2.5 text-center bg-purple-600 hover:bg-purple-700 
				focus:ring-purple-800"
      >
        Add Goal
      </button>
    </form>
  )
}
