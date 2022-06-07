import styles from './Payment.module.css'

export default function Payment() {
    return(
        <div style={{alignItems: 'center', margin: '0 auto', borderBottom: '1px solid lightgrey', paddingBottom: '1rem'}}>
            <div className={styles.wrapper} style={{display: 'flex', maxWidth: '1024px', justifyContent: 'space-between', paddingTop: '2rem'}}>
                <div>
                    <h2 style={{margin: 0}}>Payment Information</h2>
                    <p style={{color: 'grey', margin: ".5rem 0 1.4rem"}}>Choose your method of payment.</p>
                    <div>
                        <img 
                            src="/card.png" 
                            width='100%' 
                            height="240px" 
                            alt='card' 
                            style={{ borderRadius: "6px" }}
                        />
                    </div>  
                </div>

                <div style={{margin: 0}}>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "2.5rem"}}>
                        <div style={{marginRight: "1rem"}}>
                            <img 
                                src="https://play-lh.googleusercontent.com/lKebetEHVDuBrbq5KJJ4MK6V6BaFuo0Mj9Qy9YZkoenrEDZVU-IzLrbAuoKMaCT4nA"
                                width="50px"
                                height="30px"
                                alt="visa"
                            />
                        </div>
                        <div style={{marginRight: "3rem"}}>
                            <img 
                                src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
                                width="50px"
                                height="30px"
                                alt="visa"
                            />
                        </div>
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <input type='radio' />
                            <div style={{marginLeft: '1rem'}}>
                                <img 
                                    src='https://banner2.cleanpng.com/20180615/guz/kisspng-paypal-business-logo-computer-icons-payment-gateway-5b2485d385eee5.1083245415291202115486.jpg' 
                                    width='80px' 
                                    height='30px' 
                                    alt='paypal' 
                                />
                            </div>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div style={{display: 'flex', marginBottom: '1.5rem'}}>
                            <div style={{marginRight: '1rem'}}>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Credit card number</label>
                                <input 
                                    type='text' 
                                    placeholder="4324 5433 9382 1030" 
                                    style={{
                                        padding: '.8rem 1rem', 
                                        width: '200px', 
                                        borderRadius: '4px', 
                                        outline: 0,
                                        backgroundColor: "rgba(211, 211, 211, 0.5)",
                                        border: "1px solid rgba(211, 211, 211)"
                                    }} 
                                />
                            </div>
                            <div>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Expiration date</label>
                                <input 
                                    type='text' 
                                    placeholder="03/24" 
                                    style={{
                                        padding: '.8rem 1rem', 
                                        width: '200px', 
                                        borderRadius: '4px', 
                                        outline: 0,
                                        backgroundColor: "rgba(211, 211, 211, 0.5)",
                                        border: "1px solid rgba(211, 211, 211)"
                                    }}     
                                />
                            </div>
                        </div>

                        <div style={{display: 'flex', marginBottom: '1.5rem'}}>
                            <div style={{marginRight: '1rem'}}>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Security code</label>
                                <input 
                                    type='text' 
                                    placeholder="420" 
                                    style={{
                                        padding: '.8rem 1rem', 
                                        width: '200px', 
                                        borderRadius: '4px', 
                                        outline: 0,
                                        backgroundColor: "rgba(211, 211, 211, 0.5)",
                                        border: "1px solid rgba(211, 211, 211)"
                                    }}     
                                />
                            </div>
                            <div>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Postal code</label>
                                <input 
                                    type='text' 
                                    placeholder="10119" 
                                    style={{
                                        padding: '.8rem 1rem', 
                                        width: '200px', 
                                        borderRadius: '4px', 
                                        outline: 0,
                                        backgroundColor: "rgba(211, 211, 211, 0.5)",
                                        border: "1px solid rgba(211, 211, 211)"
                                    }}     
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div style={{display: 'flex', marginBottom: '.5rem', alignItems: 'center'}}>
                                    <input type='radio' />
                                    <div style={{marginLeft: '1rem', fontSize: '.95rem'}}>Use this card fo next time purchase</div>
                                </div>
                                
                                <div>
                                    <button style={{width: '100%', backgroundColor: '#3f67e9', color: 'white', outline: 0, border: 0, borderRadius: '4px', padding: '.8rem 1rem'}}>Add card</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}