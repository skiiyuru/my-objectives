export default function Goal({ title, desc }: { title: string; desc: string }) {
  return (
    <article className="flex flex-col w-full md:w-1/3 px-4 py-2 gap-2 border-solid border border-orange-300 rounded-lg">
      <div>
        <h2 className="font-display tracking-wide text-2xl text-orange-300">
          {title}
        </h2>
        <p className="font-medium">{desc}</p>
      </div>

      <div className="flex justify-end">
        <button
          className="hover:bg-red-400 hover:text-white px-2 py-1 
				rounded w-fit font-medium text-red-400"
        >
          Delete
        </button>
      </div>
    </article>
  )
}
