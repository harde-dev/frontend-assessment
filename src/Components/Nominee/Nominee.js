import "./nominee.css";

const Nominee = ({ title, photo, id, highlight }) => {
    return (
        <div className="nominee__card">
            <h3>Nominee</h3>
            <div>
                <img className="nominee__img" src="" alt="" />
            </div>
        </div>
    )
}

export default Nominee