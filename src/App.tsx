import './App.css'
import Navbar from './Companents/navbar'
import Box from './Companents/box'
import Boxs from './Companents/box1'
import Konikmalar from './Companents/konikmalar'

const App = () => {
  return (
    <div className=' flex flex-col gap-40 '>
      
      <Navbar />
      <Box />
      <Boxs />
      <Konikmalar />

    </div>

  )
}

export default App