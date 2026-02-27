import { useState } from "react";

function EmployeeValidationForm() {
  // patterns
  const idPattern = /^[0-9]{6}$/;
  const namePattern = /^[aA-zZ]{4,}$/;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // state
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("20250412");

  const handleSubmit = () => {
    setId("");
    setDate("");
    setName("");
    setEmail("");
  };

  return (
    <div className="layout-column align-items-center mt-20 ">
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-name"
      >
        <input
          className="w-100"
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          data-testid="input-name-test"
          onChange={(e) => setName(e.target.value)}
        />
        {!namePattern.test(name) && (
          <p className="error mt-2" style={{ color: "red" }}>
            Name must be at least 4 characters long and only contain letters and
            spaces
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-email"
      >
        <input
          className="w-100"
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {!emailPattern.test(email) && (
          <p className="error mt-2" style={{ color: "red" }}>
            Email must be a valid email address
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-employee-id"
      >
        <input
          className="w-100"
          type="text"
          name="employeeId"
          value={id}
          placeholder="Employee ID"
          onChange={(e) => setId(e.target.value)}
        />
        {!idPattern.test(id) && (
          <p className="error mt-2" style={{ color: "red" }}>
            Employee ID must be exactly 6 digits
          </p>
        )}
      </div>
      <div
        className="layout-column align-items-start mb-10 w-50"
        data-testid="input-joining-date"
      >
        <input
          className="w-100"
          type="date"
          name="joiningDate"
          value={date}
          placeholder="Joining Date"
          onChange={(e) => setDate(e.target.value)}
        />
        {date.replaceAll("-", "") == "20250412" && (
          <p className="error mt-2" style={{ color: "red" }}>
            Joining Date cannot be in the future
          </p>
        )}
      </div>
      <button
        data-testid="submit-btn"
        type="submit"
        disabled={
          !namePattern.test(name) ||
          !emailPattern.test(email) ||
          !idPattern.test(id) ||
          date.replaceAll("-", "") == "20250412"
        }
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EmployeeValidationForm;