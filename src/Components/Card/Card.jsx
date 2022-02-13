import { motion } from 'framer-motion'
import React from 'react'
import './Card.css'

export default function Card ({ id, letter, color }) {
  const cardVariants = {
    reveal: {
      rotateX: [0, 90, 0],
      color: ['#000', '#000000', '#f5f5f5'],
      backgroundColor: ['#ffffff', '#ffffff', color],
      transition: {
        duration: 1,
        delay: 0.125 * id
      }
    }
  }
  return (
    <motion.div
      animate={color && 'reveal'}
      variants={cardVariants}
      className="card"
      style={{
        borderColor: letter && !color && 'black'

      }}
    >
      {letter}
    </motion.div>
  )
}
