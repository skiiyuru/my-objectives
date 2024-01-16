import { type ComponentPropsWithoutRef, forwardRef } from "react"

type InputProps = ComponentPropsWithoutRef<"input"> & {
  id: string
  label: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props },
  ref
) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-white">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        name={id}
        className="text-sm font-body rounded-lg w-full p-2.5 bg-gray-700 
        border-gray-600 placeholder-gray-400 text-white 
        focus:ring-purple-500 focus:border-purple-500"
        {...props}
      />
    </div>
  )
})

export default Input
