import { create } from 'zustand'
import { StateProps } from '../../interface/auth'

interface ActionProps {
  dataAuth: StateProps
  updateDataAuth: (data: StateProps) => void
}

export const useAuthStore = create<ActionProps>()((set) => ({
  dataAuth: {
    isLoading: true,
    isSignout: false,
    infoUser: {
      token: '',
      user: null
    }
  },
  updateDataAuth: (dataAuth) => set(() => ({ dataAuth }))
}))
