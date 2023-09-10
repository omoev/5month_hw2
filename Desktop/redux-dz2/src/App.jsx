
import { Provider } from 'react-redux'
import './App.css'
import Calculator from './Components/Calculator'
import { store } from './store/store'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Calculator />
      </div>
    </Provider>

  )
}

export default App
