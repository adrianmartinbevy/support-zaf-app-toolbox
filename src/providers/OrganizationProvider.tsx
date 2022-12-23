import React, {createContext, PropsWithChildren, useContext} from 'react'

import useClientGet from '../hooks/useClientGet'
import {Organization} from '../types'

const OrganizationContext = createContext<Organization>({} as Organization)

const OrganizationProvider: React.FC = ({
  children,
}: PropsWithChildren<Record<never, any>>) => {
  let {data} = useClientGet<Organization>('organization')

  if (!data) {
    data = {} as Organization
  }

  return (
    <OrganizationContext.Provider value={data}>
      {children}
    </OrganizationContext.Provider>
  )
}

const useOrganizationInfo = (): Organization => {
  return useContext(OrganizationContext)
}

export {OrganizationContext, OrganizationProvider, useOrganizationInfo}
