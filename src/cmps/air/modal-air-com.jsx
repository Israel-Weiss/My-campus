export function ModalAirCom({ closeModal, onUpdate, tower, id }) {

    return <div className='modal-air-com'>
        <p className='title'>Command:</p>

        <button className="m-button on" onClick={() => onUpdate(tower, id, 'com', 1)}>ON</button>
        <button className="m-button off" onClick={() => onUpdate(tower, id, 'com', 0)}>OFF</button>
        <button className="m-button auto" onClick={() => onUpdate(tower, id, 'com', 2)}>AUTO</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}