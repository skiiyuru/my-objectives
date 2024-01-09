import Goal from "./components/Goal.tsx"

function App() {
  return (
    <div className="h-screen bg-zinc-900 text-white p-10">
      <main className="flex flex-col gap-4">
        <h1 className="text-5xl tracking-wide font-bold font-display">
          Objectives for 2024
        </h1>
        <Goal
          title="Learn React + TS"
          desc="Using Maximilian's udemy course."
        />
      </main>
    </div>
  )
}

export default App
