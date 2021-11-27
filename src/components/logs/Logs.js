import React, {useState, useEffect} from 'react'

const Logs = () => {
    const [logs, setLogs] = useState([])
    const [loading, setLoading] = useState(false)
    
    const getLogs = async () => {
        setLoading(true);
    }
    return (
        <div>
            
        </div>
    )
}

export default Logs;