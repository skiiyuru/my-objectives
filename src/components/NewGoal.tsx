import { useRef, type FormEvent } from "react"
import Input from "./Input"

type NewGoalProps = {
  onAddGoal: (enteredGoal: string, enteredSummary: string) => void
}

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
      <Input id="goal" label="Your goal" type="text" ref={goal} />
      <Input id="summary" label="Short summary" type="text" ref={summary} />

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
