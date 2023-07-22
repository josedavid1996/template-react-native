export interface StateProps {
  isLoading: boolean
  isSignout: boolean
  infoUser: {
    token: string
    user: any
  }
}
