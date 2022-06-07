export default function Header() {
    return(
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '3rem', borderBottom: '1px solid lightgrey'}}>
            <ul style={{display: 'flex', listStyleType: 'none', margin: 0, padding: 0}}>
                <li style={{marginRight: '3rem'}}>TRIPS</li>
                <li style={{marginRight: '3rem'}}>RECENTLY VIEWED</li>
                <li style={{marginRight: '3rem'}}>BOOKINGS</li>
            </ul>
            <div>
                <img src='/cp.jpg' width='50px' height='50px' alt='profile' style={{objectFit: 'cover', borderRadius: '50%'}} />
            </div>
        </div>
    )
}