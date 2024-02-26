/* eslint-disable react/prop-types */
import "../styles/app.css";
import { useState } from "react";

const inputList = new Object();

export default function GeneralInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setFullName(event.target.value);
        break;

      case "email":
        setEmail(event.target.value);
        break;

      case "phone":
        setPhone(event.target.value);
        break;

      case "city":
        setCity(event.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="general-info form">
      <ul>
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Robert Downy Jr."
            value={fullName}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            value={email}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="762-900-299"
            value={phone}
            onChange={handleChange}
          />
        </li>
        <li>
          <label htmlFor="city">City & Country</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Los Angeles - United States Of America"
            value={city}
            onChange={handleChange}
          />
        </li>
      </ul>
      <button onClick={handleSave}>
        <span>&#10003;</span>Save
      </button>
    </div>
  );
}

function handleSave() {
  inputList.name = fullName;
  inputList.email = email;
  inputList.phone = phone;
  inputList.city = city;

  const inputVal = Object.values(inputList);

  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal[i] === "") {
      console.error("Please input all of the value");
      return;
    }
  }
}

export function GeneralOutput() {
  return (
    <>
      <h2 className="fullName">{inputList.name}</h2>
      <p className="email">&#9993; {inputList.email}</p>
      <p className="phone">&#128222; {inputList.phone}</p>
      <p className="address">&#127968; {inputList.city}</p>
    </>
  );
}
