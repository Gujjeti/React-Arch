import type { ReactNode } from "react";

const Card = ({children}:{children:ReactNode}) => {
  return (
    <div className='shadow p-5 border ' data-testid="test-card">
        {children}
    </div>
  )
}

export default Card