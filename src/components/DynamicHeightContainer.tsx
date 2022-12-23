import React, {PropsWithChildren} from 'react'

import useDynamicAppHeight from '../hooks/useDynamicAppHeight'

export const DynamicHeightContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const appHeightRef = useDynamicAppHeight()

  return (
    <div className="dynamicContainer" ref={appHeightRef}>
      {children}
    </div>
  )
}
