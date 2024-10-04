import { atom } from "nanostores";

export const counter = atom(0)
export const totalItem = atom(0)
export const items = atom([])

export const updateTotalItem = (val) => {
  totalItem.set(totalItem.get() + val)
}
export const updateItem = (data) => {
  const currentItems = items.get()
  items.set([...currentItems, data]);
  updateTotalItem(1)
}
export const deleteItem = (data) => {
  const filteredItems = (items.get()).filter(item => data.id !== item.id)
  items.set([...filteredItems])
  updateTotalItem(-1)
}
