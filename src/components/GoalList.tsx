import { type Goal as TGoal } from "../App.tsx"
import Goal from "./Goal.tsx"

type GoalListProps = {
  goals: TGoal[]
  onDelete: (id: number) => void
}

export default function GoalList({ goals, onDelete }: GoalListProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {goals.map((goal) => (
        <Goal id={goal.id} key={goal.id} title={goal.title} onDelete={onDelete}>
          <p className="font-medium">{goal.desc}</p>
        </Goal>
      ))}
    </div>
  )
}
