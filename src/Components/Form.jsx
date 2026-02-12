import { useState } from "react";

function Input(props) {
  return (
    <input name={props.name} value={props.value} onChange={props.onChange} ></input>
  );
}

function List(props) {
  return (
    <ul>{props.lis.map( employeeName =>
      (<li key = {employeeName}>{employeeName}</li>)
    )}</ul>
  )
}

function Form() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [employee, setEmployee] = useState([])
  function Handlesubmit(e) {
    e.preventDefault();
    console.log(form);
    setEmployee(prev => [...prev, form.name]);
  }

  function Handlechange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  let FormIsValid = form.email.includes("@") && form.password.length >= 6;
  return (
    <form onSubmit={Handlesubmit}>
      <List lis={employee}/>
      <Input name="name" value={form.name} onChange={Handlechange} />
      <Input name="email" value={form.email} onChange={Handlechange} />
      <Input
        name="password"
        value={form.password}
        onChange={Handlechange}
      />
      <button type="submit" disabled={!FormIsValid}>
        Submit
      </button>
    </form>
  );
}

export default Form;
