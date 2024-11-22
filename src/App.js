import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';

import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
<BrowserRouter>
<div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
<Routes>
  <Route >  
          {/* <Route exact path='/create' component={Create} /> */}
          <Route path="create" element={<Create />} />
           <Route path="read" element={<Read />} />
         <Route path="update" element={<Update />} />
  </Route>
       

 
</Routes>
</div>
</div>
</BrowserRouter>
  )
}

export default App;