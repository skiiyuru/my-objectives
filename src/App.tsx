import { useState } from "react"
import headerImg from "./assets/SK-Avatar.jpeg"
import Goal from "./components/Goal.tsx"
import Header from "./components/Header.tsx"
import GoalList from "./components/GoalList.tsx"
import NewGoal from "./components/NewGoal.tsx"

export type Goal = {
  id: number
  title: string
  desc: string
}

function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "Master React + TypeScript",
        desc: "I shall gain a new super-power💪",
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    const updatedGoals = goals.filter((goal) => goal.id !== id)
    setGoals(updatedGoals)
  }

  return (
    <div
      className="h-screen bg-zinc-900 text-white p-4 md:pt-8  
    fixed inset-0 flex justify-center"
    >
      <main className="flex flex-col gap-8">
        <Header image={{ src: headerImg, alt: "Profile Pic" }} />
        <NewGoal />
        <GoalList goals={goals} onDelete={handleDeleteGoal} />
      </main>
    </div>
  )
}

export default App
