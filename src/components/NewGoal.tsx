import {
  type PropsWithChildren,
  type FormEvent,
  useRef,
  forwardRef,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
} from "react"

type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>

type InputProps = InputHTMLAttributes<HTMLInputElement>

type NewGoalProps = {
  onAddGoal: (enteredGoal: string, enteredSummary: string) => void
}

function Label(props: LabelProps) {
  return (
    <label className="block mb-1 text-sm font-medium text-white" {...props}>
      {props.children}
    </label>
  )
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className="text-sm rounded-lg w-full p-2.5 bg-gray-700 
      border-gray-600 placeholder-gray-400 text-white 
      focus:ring-purple-500 focus:border-purple-500"
      ref={ref}
      {...props}
    />
  )
})

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null)
  const summary = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goal.current!.value
    const enteredSummary = summary.current!.value

    onAddGoal(enteredGoal, enteredSummary)

    event.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="goal">Your goal</Label>
        <Input id="goal" type="text" ref={goal} />
      </div>
      <div>
        <Label htmlFor="desc">Short summary</Label>
        <Input id="summary" type="text" ref={summary} />
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
