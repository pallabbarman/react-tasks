import axios from "axios";
import React, { useEffect, useState } from "react";
import { InputGroup, Modal, Table } from "react-bootstrap";

const Problem2 = () => {
    const [showAllContacts, setShowAllContacts] = useState(false);
    const [showUSContacts, setShowUSContacts] = useState(false);
    const [allContacts, setAllContacts] = useState([]);
    const [usContacts, setUsContacts] = useState([]);

    const handleShowAllContacts = () => setShowAllContacts(true);
    const handleCloseAllContacts = () => setShowAllContacts(false);

    const handleShowUSContacts = () => setShowUSContacts(true);
    const handleCloseUSContacts = () => setShowUSContacts(false);

    // all contacts
    useEffect(() => {
        axios
            .get("https://contact.mediusware.com/api/contacts/")
            .then((res) => setAllContacts(res.data.results))
            .catch((err) => console.log(err.message));
    }, []);

    // us contacts
    useEffect(() => {
        axios
            .get(
                "https://contact.mediusware.com/api/country-contacts/United%20States/"
            )
            .then((res) => setUsContacts(res.data.results))
            .catch((err) => console.log(err.message));
    }, []);

    const isEven = (value) => value % 2 === 0;
    const even = allContacts.map((data) => data.id).filter(isEven);
    console.log(even);

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button
                        className="btn btn-lg btn-outline-primary"
                        type="button"
                        onClick={handleShowAllContacts}
                    >
                        All Contacts
                    </button>
                    <button
                        className="btn btn-lg btn-outline-warning"
                        type="button"
                        onClick={handleShowUSContacts}
                    >
                        US Contacts
                    </button>
                </div>

                <Modal show={showAllContacts} onHide={handleCloseAllContacts}>
                    <Modal.Header closeButton>
                        <Modal.Title>All Contacts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>All Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allContacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{contact.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <InputGroup className="mb-3 d-flex gap-2 align-items-center">
                            <label htmlFor="even">Only Even</label>
                            <input type="checkbox" name="even" id="" />
                        </InputGroup>
                    </Modal.Footer>
                </Modal>

                <Modal show={showUSContacts} onHide={handleCloseUSContacts}>
                    <Modal.Header closeButton>
                        <Modal.Title>US Contacts</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>US Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usContacts.map((contact) => (
                                    <tr key={contact.id}>
                                        <td>{contact.phone}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <InputGroup className="mb-3 d-flex gap-2 align-items-center">
                            <label htmlFor="even">Only Even</label>
                            <input type="checkbox" name="even" id="" />
                        </InputGroup>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Problem2;
