/* eslint-disable react/prop-types */
import "../styles/app.css";

export default function GeneralInfo({ general, setGeneral }) {
  console.log(general);

  const handleChange = (event) => {
    switch (event.target.id) {
      case "name":
        setGeneral({ ...general, fullName: event.target.value });
        break;

      case "email":
        setGeneral({ ...general, email: event.target.value });
        break;

      case "phone":
        setGeneral({ ...general, phone: event.target.value });
        break;

      case "city":
        setGeneral({ ...general, address: event.target.value });
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
            value={general.fullName}
            onChange={handleChange}
            maxLength={35}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@mail.com"
            value={general.email}
            onChange={handleChange}
            maxLength={25}
          />
        </li>
        <li>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="762-900-299"
            value={general.phone}
            onChange={handleChange}
            maxLength={20}
          />
        </li>
        <li>
          <label htmlFor="city">City & Country</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Los Angeles - United States Of America"
            value={general.address}
            onChange={handleChange}
            maxLength={40}
          />
        </li>
      </ul>
    </div>
  );
}

// export function GeneralOutput() {
//   const [render, setRender] = useState(false);

//   console.log("yow");

//   {
//     render && (
//       <>
//         {" "}
//         <h2 className="fullName">{inputObject[0].name}</h2>
//         <p className="email">&#9993; {inputObject[0].email}</p>
//         <p className="phone">&#128222; {inputObject[0].phone}</p>
//         <p className="address">&#127968; {inputObject[0].address}</p>
//       </>
//     );
//   }
// }
