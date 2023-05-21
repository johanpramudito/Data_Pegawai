import Head from "next/head";
import Button from "./components/Button";
import { useState } from "react";
import dynamic from 'next/dynamic'
import Active from "./components/Active";

export default function Home() {

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [posisi, setPosisi] = useState("");
  const [gaji, setGaji] = useState();
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [active, setActive] = useState(true);
  const [image, setImage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!nama){
      alert("Nama tidak boleh kosong");
      return;
    }
    setTodos([...todos, {id: Date.now(), idu:TimeRanges.now, nama, email, posisi, gaji, tanggalLahir, image}]);
    setNama("");
    setEmail("");
    setPosisi("");
    setGaji("");
    setTanggalLahir("");
    setImage("");

    if(edit){
      setEdit(false);
    }
  };

  const handleEdit = (id) => {
    setEdit(true);
    todos.map((todo) => {
      if(todo.id == id){
        setNama(todo.nama);
        setEmail(todo.email);
        setPosisi(todo.posisi);
        setGaji(todo.gaji);
        setTanggalLahir(todo.tanggalLahir);
        setTodos(todos.filter((todo) => todo.id !== id))
        setActive(todo.active);
      }
    })
  }

  const handleActive = (id) => {
    setTodos(
      todos.map((todo) => {
        if(todo.id == id){
          return {...todo, active: !todo.active}
        }
        return todo;
      }
    ))
  }

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleDeleteAll = () => {
    setTodos([]);
  }

  const [showMe, setShowMe] = useState(false);
  function toggle(){
    setShowMe(!showMe);
  }

  return(
    <>
      <Head>
        <title>Data Pegawai</title>
      </Head>
      <div className="flex flex-col items-center justify-center m-[30px]">
        <h1 className="text-4xl font-bold">Data Pegawai</h1>
        <Button type="+ Add New Employee" className="mx-auto bg-purple-400 p-3 rounded-lg text-white font-bold mt-5 hover:bg-purple-800 transition" onClick={toggle}></Button>
        <div style={{
        display: showMe?"block":"none"
      }}>
          <form onSubmit={handleSubmit} className="flex flex-col items-start justify-start gap-3 mt-5">
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-300 p-3 rounded-lg w-[500px] hover:bg-gray-600 group">
              <h4 className="text-xl group-hover:text-white after:content-['*'] after:text-pink-500 after:ml-0.5">Nama</h4>
              <input type="text" placeholder="Masukkan Nama..." className="ring-2 ring-blue-400 rounded-lg hover:ring-blue-800 transition w-full p-2" onChange={(e) => {setNama(e.target.value)}} value={nama} id="nama"></input>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-300 p-3 rounded-lg w-[500px] hover:bg-gray-600 group">
              <h4 className="text-xl group-hover:text-white after:content-['*'] after:text-pink-500 after:ml-0.5">Email</h4>
              <input type="email" placeholder="Masukkan Email..." className="ring-2 rounded-lg  transition w-full p-2 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700" onChange={(e) => {setEmail(e.target.value)}} value={email} id="email"></input>
            </div>            
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-300 p-3 rounded-lg w-[500px] hover:bg-gray-600 group">
              <h4 className="text-xl group-hover:text-white after:content-['*'] after:text-pink-500 after:ml-0.5">Posisi</h4>
              <input type="text" placeholder="Masukkan Posisi..." className="ring-2 ring-blue-400 rounded-lg hover:ring-blue-800 transition w-full p-2" onChange={(e) => {setPosisi(e.target.value)}} value={posisi} id="posisi"></input>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-300 p-3 rounded-lg w-[500px] hover:bg-gray-600 group">
              <h4 className="text-xl group-hover:text-white after:content-['*'] after:text-pink-500 after:ml-0.5">Gaji</h4>
              <input type="text" placeholder="Masukkan Gaji..." className="ring-2 ring-blue-400 rounded-lg hover:ring-blue-800 transition w-full p-2" onChange={(e) => {setGaji(e.target.value)}} value={gaji} id="gaji"></input>
            </div>
            <div className="flex flex-col items-start justify-center gap-3 bg-gray-300 p-3 rounded-lg w-[500px] hover:bg-gray-600 group ">
              <h4 className="text-xl group-hover:text-white after:content-['*'] after:text-pink-500 after:ml-0.5">Tanggal Lahir</h4>
              <input type="text" placeholder="Masukkan Tanggal Lahir..." className="ring-2 ring-blue-400 rounded-lg hover:ring-blue-800 transition w-full p-2" onChange={(e) => {setTanggalLahir(e.target.value)}} value={tanggalLahir} id="tanggallahir"></input>
            </div>
            <Button type={edit ? "Edit" : "Add"} className="mx-auto mt-[2px]"></Button>
          </form>
        </div>
        <div className="flex flex-row gap-3 flex-wrap justify-evenly align-centerd transition rounded-lg mt-3 p-5 w-full">
          {todos.map((todo) => (
            <div key={todo.id} className="flex flex-row items-start justify-between w-[500px] bg-slate-300 rounded-xl py-3 px-3 mt-3">
              <div className="flex flex-row items-start">
                <div className="flex flex-col items-start justify-start ml-3">
                  <h1 className="text-2xl">{todo.nama}</h1>
                  <p className="text-md">{todo.email}</p>
                  <p className="text-md">{todo.posisi}</p>
                  <p className="text-md">Rp{todo.gaji}</p>
                  <p className="text-md">{todo.tanggalLahir}</p>
                </div>
              </div>
          
            <div className="flex flex-col items-start justify-start gap-2">
              <Button type="Edit" onClick={() => handleEdit(todo.id)}></Button>
              <Button type="Delete" onClick={() => handleDelete(todo.id)}></Button>
              <Active type={todo.active ? "Active" : "Non-Active"} onClick={() => handleActive(todo.id)}></Active>
            </div>
          </div>
          ))}
        </div>

        {todos.length == 0 ? "" : <Button type="Delete All" onClick={() => handleDeleteAll()}></Button>}
        
      </div>
    </>
  )
}