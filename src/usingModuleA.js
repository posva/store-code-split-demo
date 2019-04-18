import { someAction } from './moduleA/actions'
import { someGetter } from './moduleA/getters'

export function execute() {
  someAction()
  someGetter()
}
