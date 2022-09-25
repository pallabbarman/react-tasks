import React, { useState } from "react";

const Problem1 = () => {
    const [show, setShow] = useState("all");
    const [tableData, setTableData] = useState([]);
    const [formInputData, setFormInputData] = useState({
        name: "",
        status: "",
    });

    const handleClick = (val) => {
        setShow(val);
    };

    const handleChange = (e) => {
        const newInput = (data) => ({
            ...data,
            [e.target.name]: e.target.value,
        });
        setFormInputData(newInput);
    };

    const handleFormData = (e) => {
        e.preventDefault();
        const checkEmptyInput = !Object.values(formInputData).every(
            (res) => res === ""
        );
        if (checkEmptyInput) {
            const newData = (data) => [...data, formInputData];
            setTableData(newData);
            const emptyInput = { name: "", status: "" };
            setFormInputData(emptyInput);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
                <div className="col-6 ">
                    <form
                        className="row gy-2 gx-3 align-items-center mb-4"
                        onSubmit={handleFormData}
                    >
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                value={formInputData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                name="status"
                                placeholder="Status"
                                value={formInputData.status}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "all" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("all")}
                            >
                                All
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "active" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("active")}
                            >
                                Active
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${
                                    show === "completed" && "active"
                                }`}
                                type="button"
                                onClick={() => handleClick("completed")}
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {show === "all" && (
                                <>
                                    {tableData
                                        .sort((a, b) =>
                                            a.status.localeCompare(b.status)
                                        )
                                        .filter(
                                            (tb) =>
                                                tb.status === "all" ||
                                                "active" ||
                                                "completed"
                                        )
                                        .map((data, index) => (
                                            <tr key={index + 1}>
                                                <td>{data.name}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        ))}
                                </>
                            )}
                            {show === "active" && (
                                <>
                                    {tableData
                                        .filter((tb) => tb.status === "active")
                                        .map((data, index) => (
                                            <tr key={index + 1}>
                                                <td>{data.name}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        ))}
                                </>
                            )}
                            {show === "completed" && (
                                <>
                                    {tableData
                                        .filter(
                                            (tb) => tb.status === "completed"
                                        )
                                        .map((data, index) => (
                                            <tr key={index + 1}>
                                                <td>{data.name}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        ))}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
