// import { type ReactNode } from "react"

import { type PropsWithChildren } from "react"

// type GoalProps = { title: string; children: ReactNode }
type GoalProps = PropsWithChildren<{
  id: number
  title: string
  onDelete: (id: number) => void
}>

export default function Goal({ id, title, children, onDelete }: GoalProps) {
  return (
    <article
      className="flex flex-col w-full 
    px-4 py-2 gap-2 border border-solid  border-purple-400 rounded-lg"
    >
      <div>
        <h2 className="font-display tracking-wide text-2xl text-purple-400">
          {title}
        </h2>
        {children}
      </div>

      <div className="flex justify-end">
        <button
          className={`hover:bg-red-400 hover:text-white px-2 
          py-1 rounded w-fit font-medium text-gray-400`}
          onClick={() => onDelete(id)}
        >
          🗑️ Delete
        </button>
      </div>
    </article>
  )
}
