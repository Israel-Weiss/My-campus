export function ModalAirFan({ closeModal, onUpdate, tower, id }) {

    return <div className='modal-air-fan'>
        <p className='title'>Set fan:</p>

        <button className="m-button cool" onClick={() => onUpdate(tower, id, 'fan', 2)}>Low</button>
        <button className="m-button cool" onClick={() => onUpdate(tower, id, 'fan', 1)}>Medium</button>
        <button className="m-button cool" onClick={() => onUpdate(tower, id, 'fan', 0)}>High</button>
        <button className="m-button cool" onClick={() => onUpdate(tower, id, 'fan', 3)}>Auto</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}