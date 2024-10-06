import './App.css';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Completed from './scenes/Completed.js';
import Inprogress from './scenes/Inprogress.js';
import Deffered from './scenes/Deffered.js';
import Pending from './scenes/Pending.js';
import Submitted from './scenes/Submitted.js';
import AddTask from './scenes/AddTask.js';
import DetailViewPending from './scenes/DetailViewPending.js';
import EdittaskPending from './scenes/EdittaskPending.js';
import DetailViewInprogress from './scenes/DetailViewInprogress.js';
import EdittaskInprogress from './scenes/EdittaskInprogress.js';
import DetailViewCompleted from './scenes/DetailViewCompleted.js';
import EdittaskCompleted from './scenes/EdittaskCompleted.js';
import DetailViewSubmitted from './scenes/DetailViewSubmitted.js';
import EdittaskSubmitted from './scenes/EdittaskSubmitted.js';
import Sidebar from './components/Sidebar.js';
import DetailViewDeffered from './scenes/DetailViewDeffered.js';
import EdittaskDeffered from './scenes/EdittaskDeffered.js';
import TaskManagement from './scenes/TaskManagement.js';
import TeamMember from './scenes/TeamMember.js';
import AddEmployee from './scenes/AddEmployee.js';
import DetailViewEmployee from './scenes/DetailViewEmployee.js';
import EditEmployee from './scenes/EditEmployee.js';

function App() {

  return (
    <Router>
      <Sidebar/>
      <div className="app my-5">
        <Routes>
          <Route path='/' element={<TaskManagement />}></Route>
          <Route path='/completed' element={<Completed />}></Route>
          <Route path='/deffered' element={<Deffered />}></Route>
          <Route path='/inprogress' element={<Inprogress />}></Route>
          <Route path='/pending' element={<Pending />}></Route>
          <Route path='/submitted' element={<Submitted />}></Route>
          <Route path='/addtask' element={<AddTask />}></Route>

          <Route path='/detailviewpending' element={<DetailViewPending />}></Route>
          <Route path='/edittaskpending' element={<EdittaskPending />}></Route>

          <Route path='/detailviewinprogress' element={<DetailViewInprogress />}></Route>
          <Route path='/edittaskinprogress' element={<EdittaskInprogress />}></Route>

          <Route path='/detailviewcompleted' element={<DetailViewCompleted />}></Route>
          <Route path='/edittaskcompleted' element={<EdittaskCompleted />}></Route>

          <Route path='/detailviewsubmitted' element={<DetailViewSubmitted />}></Route>
          <Route path='/edittasksubmitted' element={<EdittaskSubmitted />}></Route>

          <Route path='/detailviewdeffered' element={<DetailViewDeffered/>}></Route>
          <Route path='/edittaskdeffered' element={<EdittaskDeffered/>}></Route>

          <Route path='/teammember' element={<TeamMember/>}></Route>
          <Route path='/addemployee' element={<AddEmployee/>}></Route>

          <Route path='/detailviewemployee' element={<DetailViewEmployee/>}></Route>
          <Route path='/editemployee' element={<EditEmployee/>}></Route>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
