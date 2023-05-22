export function AboutEn({ language }) {
    return <section>
        <section className='title'>
            <button className="button language" onClick={() => language(true)}>עברית</button>
            About System</section>
        <section className="screen-continer ">
            <div className="side-bar">
                <ul className="list">
                    <li className="key">General</li>
                    <li className="key">Users</li>
                    <li className="key">Room Control</li>
                    <li className="key">Event Summary</li>
                    <li className="key">Edit Application</li>
                </ul>
            </div>
            <div className="text-continer">
                <p className="subtitle">General</p>
                <p className="txt">The control system application is a simulation of four-tower complex with forty floors.
                    <br />On each floor, one has full control of air conditioner units in each of the areas and rooms.
                </p>

                <p className="subtitle">Users</p>
                <div className="txt">The system as provides three default users:
                    <ul>
                        <li>View: used for viewing only, not authorized to make any changes.
                            <br />Login details: user name: "view", password: "1111"
                        </li>
                        <br />
                        <li>Operator: authorized to operate the system fully, but not to make editing changes,
                            <br />such as to add or delete air conditioner units or users.
                            <br />Login details: user name: "operator" password: "2222"
                        </li>
                        <br />
                        <li>Administrator: a user with total authorization for all the application functions.
                            <br />Login details: user name: "admin", password: "3333".
                        </li>
                    </ul>
                </div>

                <p className="subtitle">Room control</p>
                <p className="txt">The purpose of the system is to allow the operator to control climate
                    and operate the air conditioner units, in every room,
                    in every floor, in every building at the complex.
                    <br />
                    <br />Each air conditioniner unit has an operation line that shows the room temperature
                    and the unit operation status.
                    In the operation line, you can turn the unit on and off, set desired temperature,
                    select the mode (cooling, heating, etc.), and select fan intensity.
                    <br />
                    <br />All on-screen displays are received from database and all commands are sent
                    to database, which simulates inputs and outputs that connect to real conditioning
                    systems.
                    <br />
                    <br />In addition, the system warns of a significant deviation between set desired
                    temperature and room temperature, which indicates a malfunction that requires
                    examination from the maintenance team. For this purpose,
                    you need to define on the operation line, temperature deviation and duration until an alarm is started.
                    <br />
                    <br />For example: if we set a desired temperature of 20 ℃, a temperature deviation
                    of 3 ℃, and time to alarm of 20 seconds, when the room temperature is 23 ℃
                    for more then 20 seconds, the system will set off an alarm, an allarm display will show up
                    on the operation line and a new alarm will be added to the events summary. When the temperature
                    returns to desired range, the alarm display will be hidden, and the alarm in
                    the events summary will change to closed status.
                    <br />
                    <br />Important: because this is a virtual system, namely the database is not connected to a
                    real air conditioning system, the room temperatures shown are obtained using a smart
                    temperature generator algorithm, which simulates a changing temperature situation
                    like real air-conditioned areas.
                </p>

                <p className="subtitle">Event sumarie</p>
                <p className="txt">in editing..............................</p>

                <p className="subtitle">Edit application</p>
                <p className="txt">in editing..............................</p>

            </div>
        </section>
    </section>
}