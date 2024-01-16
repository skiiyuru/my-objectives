import { type Goal as TGoal } from "../App.tsx"
import Goal from "./Goal.tsx"
import InfoBox from "./InfoBox.tsx"

type GoalListProps = {
  goals: TGoal[]
  onDelete: (id: number) => void
}

export default function GoalList({ goals, onDelete }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">Start adding some new year goals</InfoBox>
  }
  return (
    <div className="flex flex-col gap-4">
      {goals.length >= 4 && (
        <InfoBox mode="warning" severity={600}>
          Don't put too much on your plate
        </InfoBox>
      )}
      {goals.map((goal) => (
        <Goal id={goal.id} key={goal.id} title={goal.title} onDelete={onDelete}>
          <p className="font-medium">{goal.desc}</p>
        </Goal>
      ))}
    </div>
  )
}
