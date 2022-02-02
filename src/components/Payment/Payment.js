import styles from './Payment.module.css'

export default function Payment() {
    return(
        <div style={{alignItems: 'center', margin: '0 auto', borderBottom: '1px solid lightgrey', paddingBottom: '1rem'}}>
            <div className={styles.wrapper} style={{display: 'flex', maxWidth: '900px', margin: '0 auto', justifyContent: 'space-between', paddingTop: '2rem'}}>
                <div>
                    <h2>Payment Information</h2>
                    <p style={{color: 'grey'}}>Choose your method of payment.</p>
                    <div>
                        <img src='https://www.ubagroup.com/nigeria/wp-content/uploads/sites/3/2021/06/UBA-MasterCard-300x200-3.png' width='100%' height='100%' />
                    </div>  
                </div>

                <div>
                    <div>
                        <div>
                            <div style={{display: 'flex', marginBottom: '.5rem', alignItems: 'center', marginTop: '1rem', justifyContent: 'flex-end'}}>
                                <input type='radio' />
                                <div style={{marginLeft: '1rem'}}>
                                    <img src='https://banner2.cleanpng.com/20180615/guz/kisspng-paypal-business-logo-computer-icons-payment-gateway-5b2485d385eee5.1083245415291202115486.jpg' width='100px' height='40px' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <form className={styles.form}>
                        <div style={{display: 'flex', marginBottom: '1.5rem'}}>
                            <div style={{marginRight: '1rem'}}>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Credit card number</label>
                                <input type='text' placeholder="4324 5433 9382 1030" style={{padding: '.8rem 1rem', width: '200px', borderRadius: '4px', outline: 0, border: '1px solid grey'}} />
                            </div>
                            <div>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Expiration date</label>
                                <input type='text' placeholder="03/24" style={{padding: '.8rem 1rem', width: '200px', borderRadius: '4px', outline: 0, border: '1px solid grey'}}/>
                            </div>
                        </div>

                        <div style={{display: 'flex', marginBottom: '1.5rem'}}>
                            <div style={{marginRight: '1rem'}}>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Security code</label>
                                <input type='text' placeholder="420" style={{padding: '.8rem 1rem', width: '200px', borderRadius: '4px', outline: 0, border: '1px solid grey'}} />
                            </div>
                            <div>
                                <label style={{display: 'block', marginBottom: '.5rem'}}>Postal code</label>
                                <input type='text' placeholder="10119" style={{padding: '.8rem 1rem', width: '200px', borderRadius: '4px', outline: 0, border: '1px solid grey'}} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <div style={{display: 'flex', marginBottom: '.5rem', alignItems: 'center'}}>
                                    <input type='radio' />
                                    <div style={{marginLeft: '1rem', fontSize: '.95rem'}}>Use this card fo next time purchase</div>
                                </div>
                                
                                <div>
                                    <button style={{width: '100%', backgroundColor: 'blue', color: 'white', outline: 0, border: 0, borderRadius: '4px', padding: '.8rem 1rem'}}>Add card</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}