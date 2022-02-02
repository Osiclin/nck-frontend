export default function Footer() {
    return(
        <div>
            <div style={{borderBottom: '1px solid lightgrey'}}>
                <div style={{maxWidth: '900px', margin: '0 auto'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                    <div>Subtotal</div>
                    <div>N2,497.00</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0'}}>
                    <div>Estimated TAX</div>
                    <div>N119.64</div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem 0', marginBottom: '2rem'}}>
                    <div>Promotional Code: Z4KXLM9A</div>
                    <div>N-60.00</div>
                </div>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '900px', margin: '1rem auto'}}>
                <div>
                    <button style={{width: 'max-content', backgroundColor: 'blue', color: 'white', outline: 0, border: 0, borderRadius: '4px', padding: '.8rem 1rem'}}>Complete payment</button>
                </div>
                <div style={{fontWeight: 500}}>
                    TOTAL: N2556.64
                </div>
            </div>
        </div>
    )
}