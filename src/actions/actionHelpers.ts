import { Dispatch } from 'redux'

export function createInputChangeEventToActionMapper (actionType: string, actionTextPropName: string, dispatch: Dispatch): React.ChangeEventHandler<HTMLInputElement> {
  function changeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    const action: any = { type: actionType }
    action[actionTextPropName] = event.target.value
    dispatch(action)    
  }
  return changeHandler
}
