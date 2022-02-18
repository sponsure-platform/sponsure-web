import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SponSure</title>
        <meta name="description" content="Creator Sponsorship, Made Easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="social-influencers.jpg" />
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">SponSure</h1>
            <br></br>
              <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">The one-stop marketplace solution to help the right brands reach the right social media influencers.</h2>
              <p className="mb-8 sm:text-2xl text-xl mb-4 leading-relaxed">Join us in our mission!</p>
              <br></br>
              <div className="lg:w-2/6 md:w-1/ flex w-full justify-center items-center">
                <div className="relative mr-4 lg:w-full xl:w w-1/4 md:w-full text-left bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
                  <form name="contact" method="POST" data-netlify="true">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                    <div className="relative mb-4">
                      <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                      <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Get Early Access!</button>
                    <p className="text-xs text-gray-500 mt-3">100+ influencers have signed up till now!</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
