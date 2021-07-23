import { Accordion } from 'react-bootstrap-accordion'
// import 'react-bootstrap-accordion/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <header className='navbar navbar-dark bg-dark shadow-sm'>
        <nav className='container-xxl flex-wrap flex-md-nowrap' aria-label='Main navigation'>
          <a className='navbar-brand p-0 me-2' href='/' aria-label='Bootstrap'>
            React Bootstrap Accordion
          </a>
          <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
            <li className='nav-item col-6 col-md-auto'>
              <a
                className='nav-link p-2'
                href='https://github.com/awran5/react-bootstrap-accordion'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  className='navbar-nav-svg d-inline-block align-text-top'
                  viewBox='0 0 512 499.36'
                  role='img'
                >
                  <title>GitHub</title>
                  <path
                    fill='white'
                    fillRule='evenodd'
                    d='M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z'
                  ></path>
                </svg>
                <small className='d-md-none ms-2'>GitHub</small>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='py-5 text-center container'>
          <div className='row py-lg-5'>
            <div className='col-lg-6 col-md-8 mx-auto'>
              <h1 className='fw-light'>React Bootstrap Accordion Example</h1>
              <p className='lead text-muted'>
                React accordion component based on bootstrap{' '}
                <a href='https://getbootstrap.com/docs/5.0/components/accordion/' style={{ textDecoration: 'none' }}>
                  Accordion
                </a>
              </p>

              <pre className='bg-light p-3 text-muted'>
                <code>npm i react-bootstrap-accordion</code>{' '}
              </pre>
            </div>
          </div>
        </section>
        <section className='mb-5 pb-md-4'>
          <div className='container px-4 px-md-3'>
            <div className='row align-items-center'>
              <div className='col-8 mx-auto'>
                <Accordion />
              </div>
            </div>
          </div>
        </section>

        <section className='mb-5 pb-md-4'>
          <div className='container px-4 px-md-3'>
            <div className='row align-items-center'>
              <div className='col-10 mx-auto'>
                <iframe
                  src='https://codesandbox.io/embed/react-bootstrap-collapse-accordion-example-3k5du?fontsize=14&hidenavigation=1&theme=dark'
                  style={{
                    width: '100%',
                    height: 500,
                    border: 0,
                    borderRadius: 4,
                    overflow: 'hidden'
                  }}
                  title='react-bootstrap-collapse-accordion-example'
                  allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
                  sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='mt-auto text-center'>
        <p>
          Build with React, based on{' '}
          <a target='_blank' rel='noopener noreferrer' href='https://getbootstrap.com/docs/5.0/components/accordion/'>
            Bootstrap 5 accordion.
          </a>
          {' - '}{' '}
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/awran5/react-bootstrap-accordion'>
            Github
          </a>
        </p>
      </footer>
      )
    </div>
  )
}

export default App
