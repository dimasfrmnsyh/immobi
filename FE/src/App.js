import {BrowserRouter, Routes, Route} from "react-router-dom";
import KaryawanList from "./components/karyawan/KaryawanList";
import AddKaryawan from "./components/karyawan/AddKaryawan";
import EditKaryawan from "./components/karyawan/EditKaryawan";
import JabatanList from "./components/jabatan/JabatanList";
import AddJabatan from "./components/jabatan/AddJabatan";
import DepartementList from "./components/departement/DepartementList";
import AddDepartement from "./components/departement/AddDepartement";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KaryawanList/>}/>
        <Route path="karyawan/add" element={<AddKaryawan/>}/>
        <Route path="karyawan/edit/:id" element={<EditKaryawan/>}/>
        <Route path="/jabatan" element={<JabatanList/>}/>
        <Route path="jabatan/add" element={<AddJabatan/>}/>
        <Route path="/departement" element={<DepartementList/>}/>
        <Route path="departement/add" element={<AddDepartement/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
