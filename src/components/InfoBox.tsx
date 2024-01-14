import { type PropsWithChildren } from "react"

type InfoBoxProps = PropsWithChildren<{
  mode: "hint" | "warning"
}>

export default function InfoBox({ mode, children }: InfoBoxProps) {
  return (
    <aside
      className={`h-20 flex flex-col justify-center items-center border 
			${mode === "hint" ? "border-white" : "border-orange-400"}
			rounded-md`}
    >
      {mode === "warning" && (
        <h2 className="font-display text-2xl text-orange-400">⚠️ Warning</h2>
      )}
      <p className="font-body font-medium ">{children}</p>
    </aside>
  )
}
