import react, {useEffect,useState} from "react";
import { getStrawHatCrew } from "../api/crewApi";
import {  useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import jolly from '../Assets/jolly.jpg';

// The thousand sunny will port here with all the crew members sailing from the mock API


const Dashboard = () => {
    const [crew, setCrew] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        getStrawHatCrew().then(data => {
            setCrew(data);
            setLoading(false);
        });
    }, []);

    const handleLogout = () => {
        dispatch(logout()); //clearing redux state
        localStorage.removeItem('token');
        navigate('/')
    }

    if (loading) return <div className="loading-page"
    style={{
        backgroundImage: `url(${jolly})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'black',
        color: 'gold',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        fontSize: '1.5rem',
      }}
    >Thousand Sunny will arrive shortly...</div>;

    return (
        <div className="dashboard-page"
        style={{
            backgroundImage: `url(${jolly})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundColor: 'black',
            minHeight: '100vh',
            padding: '2rem'
          }}
        >
            <h1>Welcome Aboard the Thousand Sunny! 🏴‍☠️</h1>
            <p>This is where you'll learn all about the future King of the pirates's crew!</p>
            <button onClick={handleLogout}>Logout</button>
            <div className="crew-grid">
                {crew.map(member => (
                    <div key={member.id} className="crew-card">
                        <img src={member.img} alt={member.name} width='150' />
                        <h3>{member.name}</h3>
                        <p><strong>Role:</strong>{member.role}</p>
                         <p><strong>Bounty:</strong>{member.bounty}</p>
                 </div>
                ))}
            </div>
            
        </div>
    )
}

export default Dashboard