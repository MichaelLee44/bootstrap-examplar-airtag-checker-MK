import AirtagBatteryBar from "./AirtagBatteryBar";

export default function AirtagTable({bikesList = []})
{
    console.log(bikesList);
    return(
        <>
            <div className = "airtag-table">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope = "col">Bike Number</th>
                            <th scope = "col">Airtag Number</th>
                            <th scope = "col">Airtag Battery</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {bikesList.map((item, index) => (
                            <tr key = {item.bikeid}>
                                <th scope = "row">{item.bikeid}</th>
                                <td>{item.airtagid}</td>
                                <td><AirtagBatteryBar charge = {item.airtagbattery}/></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
};