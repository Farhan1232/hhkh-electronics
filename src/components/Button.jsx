import { useRef } from 'react'

/**
 * Reusable button with a ripple effect on click.
 * variant = 'primary' | 'outline' | 'ghost'
 */
export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  ...rest
}) {
  const ref = useRef(null)

  const handleClick = (e) => {
    const btn = ref.current
    if (btn) {
      const circle = document.createElement('span')
      const diameter = Math.max(btn.clientWidth, btn.clientHeight)
      const rect = btn.getBoundingClientRect()
      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${e.clientX - rect.left - diameter / 2}px`
      circle.style.top = `${e.clientY - rect.top - diameter / 2}px`
      circle.className = 'ripple'
      btn.appendChild(circle)
      setTimeout(() => circle.remove(), 600)
    }
    onClick?.(e)
  }

  return (
    <button
      ref={ref}
      className={`btn btn-${variant} ${className}`}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  )
}
