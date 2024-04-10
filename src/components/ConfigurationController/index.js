/* eslint-disable arrow-body-style */
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onToggleShowContent1 = () => {
        onToggleShowContent(!showContent)
      }
      const onToggleShowLeftNavbar1 = () => {
        onToggleShowLeftNavbar(!showLeftNavbar)
      }
      const onToggleShowRightNavbar1 = () => {
        onToggleShowRightNavbar(!showRightNavbar)
      }
      return (
        <div className="ll">
          <h1 className="h1">Layout</h1>
          <ul className="ul-1">
            <li className="li-1">
              <input
                type="checkbox"
                id="content"
                className="ck"
                onChange={onToggleShowContent1}
                checked
              />
              <label htmlFor="content" className="lb">
                Content
              </label>
            </li>
            <li className="li-1">
              <input
                type="checkbox"
                id="leftNavBar"
                className="ck"
                onChange={onToggleShowLeftNavbar1}
                checked
              />
              <label htmlFor="leftNavBar" className="lb">
                Left Navbar
              </label>
            </li>
            <li className="li-1">
              <input
                type="checkbox"
                id="rightNavBar"
                className="ck"
                onChange={onToggleShowRightNavbar1}
                checked
              />
              <label htmlFor="rightNavBar" className="lb">
                Right NaVbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
