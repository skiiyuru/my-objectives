import { type PropsWithChildren } from "react"

type HintMode = {
  mode: "hint"
}

type WarningMode = {
  mode: "warning"
  severity: 400 | 500 | 600
}

type InfoBoxProps = PropsWithChildren<WarningMode | HintMode>

export default function InfoBox(props: InfoBoxProps) {
  return (
    <aside
      className={`h-20 flex flex-col justify-center items-center border 
			${props.mode === "hint" ? "border-white" : "border-orange-400"}
			rounded-md`}
    >
      {props.mode === "warning" && (
        <h2 className={`font-display text-2xl text-orange-${props.severity}`}>
          ⚠️ Warning
        </h2>
      )}
      <p className="font-body font-medium ">{props.children}</p>
    </aside>
  )
}
