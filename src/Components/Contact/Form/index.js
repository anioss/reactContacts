import { useState } from "react";

function Form({addContact, contacts}) {
  const [form, setForm] = useState({ fullname: "", phonenumber: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    // form taginde submit işelemi yapılırken duraklaması ve sayfanın yenilenmemmesi için event metodu eklenmelidir
    e.preventDefault();

    if (form.fullname === "" || form.phonenumber === "") {
      return false; 
    }

    addContact([...contacts, form])

    setForm({ fullname: "", phonenumber:""});

    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="FullName"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phonenumber"
          placeholder="PhoneNumber"
          onChange={onChangeInput}
          value={form.phonenumber}

        />
      </div>
      <div>
        <button className="btn">Add</button>
      </div>
    </form>
  );
}

export default Form;
