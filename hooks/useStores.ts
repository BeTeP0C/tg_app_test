import { useContext } from "react"
import RootStore from "@/common/stores/rootStore"
import { StoreContext } from "@/common/stores/StoreProvider"

export const useStores = () => {
  const store = useContext<RootStore>(StoreContext)

  if (!store) {
    throw new Error ("Использовать стор нужно с провайдером")
  }

  return store
}
