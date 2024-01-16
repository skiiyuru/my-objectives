import { useState } from "react"
import headerImg from "./assets/SK-Avatar.jpeg"
import GoalList from "./components/GoalList.tsx"
import Header from "./components/Header.tsx"
import NewGoal from "./components/NewGoal.tsx"
import Container from "./components/Container.tsx"

export type Goal = {
  id: number
  title: string
  desc: string
}

function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleAddGoal(enteredGoal: string, enteredSummary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: enteredGoal,
        desc: enteredSummary,
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
      className="h-screen bg-zinc-900 text-white  
    fixed inset-0 flex justify-center overflow-y-auto"
    >
      <main className="flex flex-col gap-8 p-4 md:py-8 ">
        <Header image={{ src: headerImg, alt: "Profile Pic" }} />
        <NewGoal onAddGoal={handleAddGoal} />
        <GoalList goals={goals} onDelete={handleDeleteGoal} />
        <Container
          as={"footer"}
          className="font-body font-medium text-gray-500"
        >
          Built by @skiiyuru
        </Container>
      </main>
    </div>
  )
}

export default App
