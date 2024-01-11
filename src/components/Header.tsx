type HeaderProps = {
  image: {
    src: string
    alt: string
  }
}

export default function Header({ image }: HeaderProps) {
  return (
    <header className="flex flex-row items-end gap-4">
      <img className="rounded-lg object-contain h-16 w-16 " {...image} />
      <h1 className="text-5xl tracking-wide font-bold font-display h-fit">
        Objectives for 2024
      </h1>
    </header>
  )
}
