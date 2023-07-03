import 'bulma/css/bulma.css'
import {OfficeCards} from './OfficeCards'
import angelaImage from './profile-pictures/angela.jpg'
import pamImage from './profile-pictures/pam.jpg'
import darrylImage from './profile-pictures/Darryl.jpg'
import dwightImage from './profile-pictures/dwight.jpg'
import jimImage from './profile-pictures/jim.jpg'
import michaelImage from './profile-pictures/michael.jpg'

export const App = () => {
  return (
    <div>
      <section className='hero is-small is-success'>
        <div className='hero-body'>
          <p className='title'>The Office</p>
        </div>
      </section>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <OfficeCards
                name='Angela'
                handle='@DwightsBoo'
                image={angelaImage}
                description='Blonde hair gal'
              />
            </div>
            <div className='column is-4'>
              <OfficeCards
                name='Pam'
                handle='@JimsSecretCrush'
                image={pamImage}
                description='friendly and sweet, but shy and a bit mousy'
              />
            </div>
            <div className='column is-4'>
              <OfficeCards
                name='Darryl'
                handle='@WarehouseWarrior'
                image={darrylImage}
                description='A warehouse manager'
              />
            </div>
          </div>
          <div className='columns'>
            <div className='column is-4'>
              <OfficeCards
                name='Dwight'
                handle='@MichaelsBFF'
                image={dwightImage}
                description='Craves authority over his co-workers'
              />
            </div>
            <div className='column is-4'>
              <OfficeCards
                name='Jim'
                handle='@PamsLover'
                image={jimImage}
                description='Often bored of his job'
              />
            </div>
            <div className='column is-4'>
              <OfficeCards
                name='Michael'
                handle='@DunderMifflin4Life'
                image={michaelImage}
                description='Best/worst manager,butt of everybodies jokes'
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

