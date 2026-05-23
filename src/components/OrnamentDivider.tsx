export function OrnamentDivider({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <span className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-gold/60 to-gold/60" />
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-gold">
        <path
          d="M2 10 Q 10 2, 20 10 T 38 10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="20" cy="10" r="2.5" fill="currentColor" />
        <circle cx="2" cy="10" r="1.5" fill="currentColor" />
        <circle cx="38" cy="10" r="1.5" fill="currentColor" />
      </svg>
      {label && (
        <span className="font-tamil text-gold text-sm tracking-widest uppercase whitespace-nowrap">
          {label}
        </span>
      )}
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-gold">
        <path
          d="M2 10 Q 10 18, 20 10 T 38 10"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="20" cy="10" r="2.5" fill="currentColor" />
        <circle cx="2" cy="10" r="1.5" fill="currentColor" />
        <circle cx="38" cy="10" r="1.5" fill="currentColor" />
      </svg>
      <span className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent via-gold/60 to-gold/60" />
    </div>
  );
}
