import React from 'react'
import { getAvatarColor } from '../../lib/utils.js'

const Avatar = ({ userId, nickname, size = 40, className = '' }) => {
  const color = getAvatarColor(userId || nickname || 'default')
  const initial = (nickname || userId || '?')[0].toUpperCase()
  const fontSize = size * 0.42

  return (
    <div
      className={`flex items-center justify-center rounded-md flex-shrink-0 ${className}`}
      style={{ width: size, height: size, backgroundColor: color, fontSize }}
    >
      <span className="text-white font-semibold select-none">{initial}</span>
    </div>
  )
}

export default Avatar
