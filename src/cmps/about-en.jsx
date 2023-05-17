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
                    <li className="key">Event Summarie</li>
                    <li className="key">Edit Application</li>
                </ul>
            </div>
            <div className="text-continer">
                <p className="subtitle">General</p>
                <p className="txt">The control system application is a simulation of a complex of four towers with forty floors,
                    <br />for each floor, the system provides climate control for each of the different areas and rooms.
                </p>

                <p className="subtitle">Users</p>
                <div className="txt">the system comes with three default users:
                    <ul>
                        <li>View: used for viewing only and is not authorized to make changes.
                            <br />Login details: user name: "view", password: "1111"
                        </li>
                        <br />
                        <li>Operator: user who is authorized to operate the system, but is not authorized to
                            make editing changes, such as adding and deleting air conditioning units or users.
                            <br />Login details: user name: "operator" password: "2222"
                        </li>
                        <br />
                        <li>Administrator: a user with total authorization for all functions in the application.
                            <br />Login details: user name: "admin", password: "3333".
                        </li>
                    </ul>
                </div>

                <p className="subtitle">Room control:</p>
                <p className="txt">The purpose of the system is allow the operator to control climate
                    and the air conditioning operation, in every room,
                    on every floor, in every building in the complex.
                    <br />
                    <br />Each air conditioning unit has an operation line that show the temperature
                    in the room and the operation status.
                    In the operation line, you can turn the unit on and off, set the desired temperature,
                    select the mode (cooling, heating, etc.), and select the fan intensity.
                    <br />
                    <br />All on-screen displays are received from database and all commands are sent
                    to database, which simulates inputs and outputs that connecting to real conditioning
                    systems.
                    <br />
                    <br />Addition, the system warns of a significant deviation between the set desired
                    temperature and the room temperature , which indicates a malfunction that requires
                    examination from the maintenance team. for this purpose,
                    you need define the temperature deviation and the duration until an alert is raised.
                    <br />
                    <br />For example: if we set a desired temperature of 20 ℃, a temperature deviation
                    of 3 ℃, an time to alarm of 20 seconds, if the temperature in the room is 23 ℃
                    or more, for 20 seconds, the system will raise an alarm. an alert display will show up
                    in the operation line and an alert will be added to the events summarie. When the temperature
                    returns to desired range, the alert display will be hidden, and the alert in
                    events summarie will change to a closed status.
                    <br />
                    <br />Important: since this is a virtual system, and the database is not connected to a
                    real air conditioning system, the temperatures found are obtained using a smart
                    temperature generator algorithm, which simulates a changing temperature situation
                    like a real air-conditioned rooms.
                </p>

                <p className="subtitle">Event sumarie</p>
                <p className="txt">in editing..............................</p>

                <p className="subtitle">Edit application</p>
                <p className="txt">in editing..............................</p>

            </div>
        </section>
    </section>
}