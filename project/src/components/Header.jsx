import logo from '../assets/header.jpg'

const styles = {
    header: {
        position: 'absolute',
        top: '75px',
        left: '0px',
        height:'75px',
        width:'100%',      
    },
    title: {
        position: 'absolute',
        top: '-100px',
        left: '300px',
        fontSize: '50px',
        fontFamily: 'Bungee Spice, sans-serif'
    },
    logo: {
        height: '300px',
        width: '100%',
        willChange: 'filter',
        transition: 'filter 300ms',
        position: 'relative',
        top: '-150px',
        zIndex: '-1'
    }
}

function Header() {       
    return (
        <div style={styles.header}className='header' >
            <a>
                <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet"></link>
                <p style={styles.title} className='title'>Shawn Crook</p>
                <img style={styles.logo} className='logo' src={logo} alt="Logo"></img>
            </a>
        </div>
    )
}


export default Header