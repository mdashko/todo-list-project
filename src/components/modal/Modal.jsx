import "./Modal.css";

export const Modal = (props) =>
    (
        <div className="modal-background">
            <div className="modal-background__modal">
                <h1 className="modal-background__modal_title">{props.taskName}</h1>
                <h2 className="modal-background__modal_description">Description:</h2>
                <p className="modal-background__modal_description-text">
                    {props.taskDescr}
                </p>
                <div className="modal-background__modal__status-container">
                    <p>Status: </p>
                    <input type="checkbox" checked={props.taskStatus}/>
                </div>
                <button
                    onClick={props.onClose}
                    className="modal-background__modal_close-btn"
                    type="click"
                >
                    close
                </button>
            </div>
        </div>
    );
