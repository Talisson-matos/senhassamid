import { useEffect } from 'react'

interface ToastProps {
  message: string
  visible: boolean
  onClose: () => void
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 1800)
    return () => clearTimeout(t)
  }, [visible, onClose])

  return (
    <div className={`toast ${visible ? 'toast--visible' : ''}`}>
      <span className="toast__icon">✓</span>
      <span>{message}</span>
    </div>
  )
}
