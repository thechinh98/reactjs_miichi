import Modal from "./Modal";
import React, { Component } from "react";
import Footer from "./layout/Footer";
import Title from "./Title";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Header from "./layout/Header";
import TableSample from "./layout/Table";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };
    render() {
        return (
            <main>
                <body>
                    <div className="mainbody">
                        <Header />
                        <h1> React Modal </h1> <Title />
                        <Modal show={this.state.show} handleClose={this.hideModal}>
                            <p> Modal </p>
                        </Modal>
                        <SearchBar />
                        <button type="button" onClick={this.showModal}>
                            Open Modal
                        </button>
                        <TableSample />
                    </div>
                    <SideBar />
                </body>
                <Footer />
            </main>
        );
    }
}

export default Dashboard;
