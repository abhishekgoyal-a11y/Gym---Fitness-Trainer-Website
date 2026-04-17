type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl leading-none tracking-wide text-white md:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-pretty text-sm text-zinc-400 md:text-base">{subtitle}</p>
      ) : null}
    </div>
  )
}
