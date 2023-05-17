export function ModalAirMode({ closeModal, onUpdate, tower, id }) {

    return <div className='modal-air-mode'>
        <p className='title'>Set mode:</p>

        <button className="m-button cool" onClick={() => onUpdate(tower, id, 'mode', 0)}>COOL</button>
        <button className="m-button heat" onClick={() => onUpdate(tower, id, 'mode', 1)}>HEAT</button>
        <button className="m-button fan" onClick={() => onUpdate(tower, id, 'mode', 2)}>FAN</button>
        <button className="m-button auto" onClick={() => onUpdate(tower, id, 'mode', 3)}>AUTO</button>
        <hr />
        <button className='m-button close' onClick={closeModal}>Cancel</button>
    </div>
}