import './Footer.css'
import social from '../../../assets/images/twitter.svg'
import social1 from '../../../assets/images/facebook.svg'

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
            <div className='contact'>
                <p>About Us</p>
                <p>Contact</p>
            </div>
            <div className='social'>
                <div className="twitter">
                    <img src={social} alt="twitter" />
                    <p>Twitter</p>
                </div>
                <div className="facebook">
                    <img src={social1} alt="facebook"/>
                    <p>Facebook</p>
                </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer