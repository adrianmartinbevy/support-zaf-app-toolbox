export interface Metadata<T> {
  appId: number
  name: string
  version: string
  installationId: number
  settings: T
}

export enum AppLocations {
  dealCard = 'deal_card',
  leadCard = 'lead_card',
  personCard = 'person_card',
  companyCard = 'company_card',
  modal = 'modal',
}

export type AppLocation =
  | 'deal_card'
  | 'lead_card'
  | 'person_card'
  | 'company_card'
  | 'modal'
  | 'ticket_sidebar'
  | 'new_ticket_sidebar'
  | 'ticket_editor'
  | 'user_sidebar'
  | 'organization_sidebar'
  | 'nav_bar'
  | 'top_bar'
  | 'background'

export interface Context {
  // eq. "sell"
  product: string
  // location where the app is supposed to show up
  location: AppLocation
  // uniq instance id
  instanceGuid: string
  // account info
  account: Account
  // user info
  currentUser: User
}

export interface Account {
  domain: string
  currency: string
  timezone: string
  numberFormat: string
  timeFormat: string
  dateFormat: string
  decimalSeparator: string
}

export interface User {
  id: number
  name: string
  email: string
  status: string
  alias?: string
  avatarUrl?: string
  invited: boolean | null
  confirmed: boolean
  phone: string | null
  signature?: string
  role: string
  roles: Role[]
  group: Group | null
  groups?: Group[]
  reportsTo: number | null
  timezone: string | null
  createdAt: string
  updatedAt: string
  deletedAt: string | null
  locale: string
  organizations?: Organization[]
}

export interface Group {
  id: number
  name: string
}

export interface Role {
  id: number
  name: string
}

export interface Ticket {
  id: number
  subject: string
  description: string
  type: string
}

export interface Organization {
  id: number
  name: string
  domainNames?: string[]
  group: Group | null
  sharedTickets: boolean
  sharedComments: boolean
}

export enum FeedbackStatus {
  success = 'success',
  error = 'error',
  loading = 'loading',
}

export interface Feedback {
  status: FeedbackStatus
  error?: any | void
}
export interface Response<T> {
  data: T | null
  error: object | null
  feedback: Feedback | null
  refetch?: () => void
}

export interface ClientMetadataResponse<T> {
  data: Metadata<T> | null
  error: object | null
  feedback: Feedback | null
  refetch?: () => void
}

export interface ClientContextResponse {
  data: Context | null
  error: object | null
  feedback: Feedback | null
  refetch?: () => void
}

export interface CallbackRequestResponse<T> {
  performRequest: () => Promise<void>
  data: T | null
  error: object | null
  feedback: Feedback | null
}

export interface Client {
  on: <T>(event: string, callback: (data?: T) => void) => void
  invoke: <T>(name: string, ...options: any[]) => Promise<T>
  get: <T>(name: string | string[]) => Promise<T>
  set: <T>(name: string, value: string) => Promise<T>
  request: <Input, Output>(data: Input) => Promise<Output>
  metadata: <T>() => Promise<Metadata<T>>
  context: () => Promise<Context>
  trigger: (event: string, data?: any) => void
  instance: (Guid: string) => Client
}

export enum ClientInvokeOptions {
  accountTimezone = 'account',
  formatDate = 'formatDate',
  formatDateAndTime = 'formatDateAndTime',
  formatCurrency = 'formatCurrency',
}

export const version = '0.0.5'

export interface ChangedProperty<T> {
  propertyName: string
  oldValue: T
  newValue: T
}
