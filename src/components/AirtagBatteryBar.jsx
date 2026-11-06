export default function AirtagBatteryBar({charge})
{
    return(
        <>
            {charge <= 20 && (
                <div className = "progress">
                    <div className = "progress-bar bg-danger" style ={{width: `${charge}%`}}>
                        {charge}%
                    </div>
                </div>
            )}
            {charge > 20 && (
                <div className = "progress">
                    <div className = "progress-bar bg-info" style ={{width: `${charge}%`}}>
                        {charge}%
                    </div>
                </div>
            )}
        </>
    )
};