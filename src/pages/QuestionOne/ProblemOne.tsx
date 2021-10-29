import { useState } from 'react'
import Button from '@material-ui/core/Button'

export const ProblemOne = () => {
  const [counter, setCounter] = useState(0)

  const handleOnClick: any = () => {
    setCounter(counter + 1)
  }

  return (
    <div style={{ marginTop: 48 }}>
      <Button variant='contained' onClick={handleOnClick}>
        I've been clicked: {counter} time{counter === 1 ? '' : 's'}
      </Button>
    </div>
  )
}
