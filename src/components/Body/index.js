// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="crd-2">
          <>
            {showLeftNavbar === true && (
              <div className="left-nv">
                <h1 className="hh2">Left Navbar Menu</h1>
                <ul>
                  <li className="li-2">
                    <p>Item 1</p>
                  </li>
                  <li className="li-2">
                    <p>Item 2</p>
                  </li>
                  <li className="li-2">
                    <p>Item 3</p>
                  </li>
                  <li className="li-2">
                    <p>Item 4</p>
                  </li>
                </ul>
              </div>
            )}
          </>
          <>
            {showContent === true && (
              <div className="content">
                <h1 className="hh2">Content</h1>
                <p className="pp">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            )}
          </>
          <>
            {showRightNavbar === true && (
              <div className="right-nv">
                <h1 className="hh2">Right Navbar</h1>
                <div className="bx">Ad 1</div>
                <div className="bx">Ad 2</div>
              </div>
            )}
          </>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
